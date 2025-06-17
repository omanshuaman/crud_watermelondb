import { Redirect } from "expo-router";

const HomeScreen = () => {
  return <Redirect href={"/allocations/index"} />;
};

export default HomeScreen;
