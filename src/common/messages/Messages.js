import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "native-base";

// Styles
import Styles from "@common/messages/MessagesStyles";

class Messages extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };

  static defaultProps = {
    message: ""
  };

  render() {
    return (
      <View style={Styles.section_message}>
        <Text style={Styles.text_message}>{this.props.message}</Text>
      </View>
    );
  }
}

export default Messages;
