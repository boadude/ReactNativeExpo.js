import { Dimensions } from "react-native";
import Colors from "@assets/native-base-theme/variables/commonColor";

const deviceWidth = Dimensions.get("window").width;

export default {
  defaultFont: {
    fontFamily: Colors.fontFamily
  },
  section_appname: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.brandPrimary
  },
  text_tittle: {
    fontFamily: "Questrial",
    fontSize: Colors.fontSizeTittle,
    color: "#FFF"
  },
  section_form: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: deviceWidth
  }
};
