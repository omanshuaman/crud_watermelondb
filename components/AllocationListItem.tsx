import { withObservables } from "@nozbe/watermelondb/react";
import { StyleSheet, Text, View } from "react-native";
import AccountAllocation from "../model/AccountAllocation";
import Allocation from "../model/Allocation";
import AccountAllocationItem from "./AccountAllocationItem";

type AllocationListItem = {
  allocation: Allocation;
  accountAllocations: AccountAllocation[];
};

const AllocationListItem = ({
  allocation,
  accountAllocations,
}: AllocationListItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>
          {allocation.createdAt?.toLocaleDateString() ?? "N/A"}
        </Text>
        <Text style={styles.income}>${allocation.income}</Text>
      </View>

      <View style={{ gap: 5, paddingVertical: 5 }}>
        {accountAllocations.map((item) => (
          <AccountAllocationItem accountAllocation={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const enhance = withObservables(
  ["allocation"],
  ({ allocation }: { allocation: Allocation }) => ({
    allocation,
    accountAllocations: allocation.accountAllocations,
  })
);

export default enhance(AllocationListItem);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "gainsboro",
    padding: 10,
  },
  income: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
});
