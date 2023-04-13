import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, ListHeader, MemberCount } from "./style";
import PageInfo from "@components/PageInfo";
import Header from "@components/Header";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";

export default function Members() {
  const [team, setTeam] = useState("A Team");
  const [players, setPlayers] = useState([]);

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
    </Container>
  );
}
