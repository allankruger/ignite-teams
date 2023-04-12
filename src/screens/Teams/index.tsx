import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";
import Header from "@components/Header";
import PageInfo from "@components/PageInfo";
import TeamCard from "@components/TeamCard";
import EmptyList from "@components/EmptyList";
import Button from "@components/Button";

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
        contentContainerStyle={teams.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="No teams found. That's a great time to create one." />
        )}
      />
      <Button title="Create new team" />
    </Container>
  );
}
