import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, ListHeader, MemberCount } from "./style";
import PageInfo from "@components/PageInfo";
import Header from "@components/Header";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import MemberCard from "@components/MemberCard";
import EmptyList from "@components/EmptyList";
import Button from "@components/Button";

export default function Members() {
  const [team, setTeam] = useState("A Team");
  const [players, setPlayers] = useState(["Allan"]);

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

      <ListHeader>
        <FlatList
          horizontal
          data={["A Team", "B Team"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <MemberCount>{players.length}</MemberCount>
      </ListHeader>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <MemberCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="No team members found." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Delete team" type="SECONDARY" />
    </Container>
  );
}
