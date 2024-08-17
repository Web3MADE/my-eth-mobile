import { StyleSheet, Text, View } from "react-native";
import { H1, Image, TamaguiProvider } from "tamagui";

import appConfig from "../tamagui.config";

// TODO: JUST FUCKING DO IT.
export default function Page() {
  return (
    <TamaguiProvider config={appConfig}>
      <View style={styles.container}>
        <Text style={styles.walletAddress}>My Wallet 0x123...</Text>
        <H1 style={styles.totalAmount}>Total Amount</H1>
        <View style={styles.assetsContainer}>
          <Text style={styles.assetsTitle}>Assets</Text>
          {/* Assets fetched from API, via etherscan and mapped here */}
          {/* AssetSummary component */}
          <View style={styles.assetComponent}>
            <Image
              source={{
                uri: "https://picsum.photos/200/300",
                width: 50,
                height: 50,
              }}
              style={styles.assetImage}
            />
            <View style={styles.assetName}>
              <Text style={styles.assetNameText}>Ethereum</Text>
              <Text style={styles.assetAmount}>2.5 ETH</Text>
            </View>
            <View style={styles.assetStats}>
              <Text style={styles.assetPrice}>$3,500</Text>
              <Text style={styles.assetChange}>+1.5%</Text>
            </View>
          </View>
        </View>
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1c1c1e",
    justifyContent: "center",
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
  assetsContainer: {
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    padding: 15,
  },
  assetsTitle: {
    color: "#8e8e93",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  assetComponent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#3a3a3c",
    borderRadius: 10,
    padding: 10,
  },
  assetImage: {
    marginRight: 15,
    borderRadius: 25,
  },
  assetName: {
    flex: 2,
  },
  assetNameText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  assetAmount: {
    color: "#8e8e93",
    fontSize: 14,
  },
  assetStats: {
    flex: 1,
    alignItems: "flex-end",
  },
  assetPrice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  assetChange: {
    color: "#34c759", // Use '#ff3b30' for negative changes
    fontSize: 14,
  },
});
