import { withObservables } from "@nozbe/watermelondb/react";
import { Text, View } from "react-native";
import Account from "../model/Account";
import AccountAllocation from "../model/AccountAllocation";

type AccountAllocationItem = {
  accountAllocation: AccountAllocation;
  account: Account;
};

const AccountAllocationItem = ({
  accountAllocation,
  account,
}: AccountAllocationItem) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{account.name}</Text>
      <Text>${accountAllocation.amount}</Text>
    </View>
  );
};

const enhance = withObservables(
  ["accountAllocation"],
  ({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
    accountAllocation,
    account: accountAllocation.account,
  })
);

export default enhance(AccountAllocationItem);
