import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

export default {
  section_message: {
    width: deviceWidth - 35,
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  text_message: { color: "red", textAlign: "center" }
};
