import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "@assets/native-base-theme/variables/commonColor";

// Styles
import Styles from "@components/loading/LoadingStyles";

class Loading extends React.Component {
  render = () => (
    <View style={Styles.section_content}>
      <ActivityIndicator size="large" color={Colors.brandPrimary} />
    </View>
  );
}

export default Loading;
