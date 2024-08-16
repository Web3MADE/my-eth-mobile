import { StyleSheet, Text, View } from "react-native";
import { H1, Image, TamaguiProvider } from "tamagui";

import appConfig from "../tamagui.config";

export default function Page() {
  return (
    <TamaguiProvider config={appConfig}>
      <View style={styles.container}>
        <Text>My Wallet 0x123...</Text>
        <H1>Total Amount</H1>
        <View>
          <Text>Assets</Text>
          {/* Assets fetched from API, via etherscan and mapped here */}
          {/* AssetSummary component */}
          <View style={styles.assetComponent}>
            <Image
              source={{
                uri: "https://picsum.photos/200/300",
                width: 50,
                height: 50,
              }}
            />
            <View style={styles.assetName}>
              <Text>Ethereum</Text>
              <Text>2.5 ETH</Text>
            </View>
            <View style={styles.assetStats}>
              <Text>$3.500</Text>
              <Text>+1.5%</Text>
            </View>
          </View>
        </View>
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  assetComponent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  assetName: {
    display: "flex",
  },
  assetStats: {
    display: "flex",
    marginLeft: "auto",
  },
});
