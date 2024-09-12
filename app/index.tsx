import { Button, StyleSheet, TextInput } from "react-native";

import { PrivyProvider, useLoginWithEmail } from "@privy-io/expo";
import { H1, TamaguiProvider, Text, View } from "tamagui";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import appConfig from "../tamagui.config";
import Asset from "./components/Asset";
import { PriceProvider } from "./context/PriceContext";

export default function Page() {
  const queryClient = new QueryClient();
  const [email, setEmail] = useState("");

  const { sendCode, loginWithCode } = useLoginWithEmail({
    onLoginSuccess(user, isNewUser) {
      // show a toast, send analytics event, etc...
      console.log("privy email success " + user + isNewUser);
    },
    onError(error) {
      console.log("Privy email error " + error);
    },
    onSendCodeSuccess() {
      console.log("code sent successfully");
    },
  });

  async function handleCode() {
    console.log("Email being sent ", email);
    var res = await sendCode({ email });
    res.success ? console.log("Code sent") : console.log("Code not sent");
    console.log("Email sent");
  }

  function handleLogin() {
    console.log("Email being logged in ", email);
    loginWithCode({ email, code: "123456" });
    console.log("Email logged in");
  }
  const symbols = [
    { symbolOne: "ETH", symbolTwo: "USDT" },
    { symbolOne: "ARB", symbolTwo: "USDT" },
    { symbolOne: "BTC", symbolTwo: "USDT" },
  ];

  return (
    <PrivyProvider
      appId={"clzyba3u904yf6lm0seerdbef"}
      clientId={"client-WY2p3LBa25EZ5jieVc8cGXVAC9uGsBW5XPKd7SMAQvGw6"}
    >
      <QueryClientProvider client={queryClient}>
        <PriceProvider symbols={symbols}>
          <TamaguiProvider config={appConfig}>
            <View style={styles.container}>
              <Text style={styles.walletAddress}>My Wallet 0x123...</Text>
              <H1 style={styles.totalAmount}>Total Amount</H1>
              <Text>Login</Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                inputMode="email"
                style={{ color: "#fff", backgroundColor: "#333", padding: 10 }}
              />

              <Button title="Send  Code" onPress={handleCode} />

              <Button title="Login with code" onPress={() => handleLogin()} />
              <Asset symbolOne="ETH" symbolTwo="USDT" />
              <Asset symbolOne="ARB" symbolTwo="USDT" />
              <Asset symbolOne="BTC" symbolTwo="USDT" />
            </View>
          </TamaguiProvider>
        </PriceProvider>
      </QueryClientProvider>
    </PrivyProvider>
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
