import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// export const providerOptions = {
//   walletconnect: {
//     package: WalletConnect, // required
//     options: {
//       // infuraId: process.env.INFURA_KEY, // required
//     },
//   },
// };

export const walletconnect = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
});
