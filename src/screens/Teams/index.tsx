import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import Header from "@components/Header";
import PageInfo from "@components/PageInfo";
import TeamCard from "@components/TeamCard";

export default function Teams() {
  const [teams, setTeams] = useState<string[]>(["Team Allan"]);

  return (
    <Container>
      <Header />
      <PageInfo title="Teams" subtitle="Play with your team" />
      <FlatList
        data={teams}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <TeamCard title={item} />}
      />
    </Container>
  );
}
