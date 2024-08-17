# My Eth

An React Native Expo-Go app, that enables easy investments in your favourite cryptocurrencies.

Fully decentralized, no middleman.

## TODO:

- Implement Home screen = Do the whole fucking thing bro
- Define API endpoints/resources needed
- Finish Home Screen logic (API, PrivySDK, Real logic)
- Implement Real API for Home Screen

## Screens

This app will contain the following screens:

- Login
- Home: Showing all assets under management
- Invest: Actionable screen for investing
- Statistics: Showing all statistics for current investments

### Smart Contracts

Brainstorming what contracts could be used here.

1. User logs into app and sees home page
2. Home page fetches data:

- Use PrivySDK to Fetch asset data
- use PrivySDK to send assets

3. User swipes to Invest screen

- Decentralized Exchange Integration Contract: This contract interacts with decentralized exchanges to facilitate seamless swaps from the app. This contract finds the best price & allows users to provide liquidity to a specific DEX's liquidity pools.
- Invest Pool Contract: This contract pools users funds together to invest in a specific cryptocurrency or a basket of cryptocurrencies.
- Automatic Rebalancing Contract: This rebalances a user's portfolio based on predefined strategies: low, medium or high-risk.
