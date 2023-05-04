/** @format */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      "react-native-reanimated/plugin", // caution: must be at the bottom
    ],
  };
};
