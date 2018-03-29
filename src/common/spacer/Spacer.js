import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

class Spacer extends React.Component {
  static propTypes = {
    size: PropTypes.number
  };

  static defaultProps = {
    size: 20
  };

  render() {
    return (
      <View style={{ height: this.props.size }}>
        <Text style={{ color: "#fff", textAlign: "center" }} />
      </View>
    );
  }
}

export default Spacer;
