import { Container } from "./styles";
import Header from "@components/Header";
import PageInfo from "@components/PageInfo";
import TeamCard from "@components/TeamCard";

export default function Groups() {
  return (
    <Container>
      <Header />
      <PageInfo title="Teams" subtitle="Play with your team" />
      <TeamCard title="Team Jacob" />
      <TeamCard title="Team Edward" />
    </Container>
  );
}
