import { Q } from "@nozbe/watermelondb";
import { withObservables } from "@nozbe/watermelondb/react";
import { FlatList } from "react-native";
import { allocationsCollection } from "../db";
import Allocation from "../model/Allocation";
import AllocationListItem from "./AllocationListItem";

function AllocationsList({ allocations }: { allocations: Allocation[] }) {
  return (
    <FlatList
      data={allocations}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => <AllocationListItem allocation={item} />}
    />
  );
}

const enhance = withObservables([], () => ({
  allocations: allocationsCollection.query(Q.sortBy("created_at", Q.desc)),
}));

export default enhance(AllocationsList);
