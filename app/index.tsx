import { StyleSheet, Text, View } from "react-native";
import { H1, TamaguiProvider } from "tamagui";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appConfig from "../tamagui.config";
import Asset from "./components/Asset";

// TODO: JUST FUCKING DO IT.
export default function Page() {
  const queryClient = new QueryClient();
  // 1. Setup PrivySDK with React Native (pending approval via email)
  // 2. Setup API to fetch price data
  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={appConfig}>
        <View style={styles.container}>
          <Text style={styles.walletAddress}>My Wallet 0x123...</Text>
          <H1 style={styles.totalAmount}>Total Amount</H1>
          <Asset />
          <Asset />
          <Asset />
        </View>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1c1c1e",
    justifyContent: "center",
    gap: 8,
  },
  walletAddress: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  totalAmount: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
});
