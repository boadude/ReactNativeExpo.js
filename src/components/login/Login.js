import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  Header
} from "native-base";
import { View } from "react-native";
import { connect } from "react-redux";

// Components
import Messages from "@common/messages/Messages";
import Spacer from "@common/spacer/Spacer";
import Loading from "@components/loading/Loading";

// Actions
import { FakeLogin, ChangeInputLogin } from "@components/login/LoginActions";

// Styles
import Styles from "@components/login/LoginStyles";

class LoginScreen extends Component {
  static propTypes = {
    FakeLogin: PropTypes.func.isRequired,
    ChangeInputLogin: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  };

  static defaultProps = {
    errorMessage: null,
    email: "",
    password: ""
  };

  handleSubmit = () => {
    this.props
      .FakeLogin(this.props.email, this.props.password)
      .catch(e => console.log(`Error: ${e}`));
  };

  render = () => {
    const { isLoading, errorMessage } = this.props;

    if (isLoading) return <Loading />;

    return (
      <Container>
        <Header iosBarStyle="light-content" style={{ borderBottomWidth: 0 }} />
        <Content
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
          scrollEnabled={false}
        >
          <View style={Styles.section_appname}>
            <Text style={Styles.text_tittle}>React Native Expo Starter</Text>
          </View>
          <View style={Styles.section_form}>
            <Form style={Styles.form}>
              <Item floatingLabel style={{ marginRight: 15 }}>
                <Label style={Styles.defaultFont}>Email</Label>
                <Input
                  style={{ fontFamily: "Questrial" }}
                  autoCapitalize="none"
                  value={this.props.email}
                  keyboardType="email-address"
                  onChangeText={v => this.props.ChangeInputLogin("email", v)}
                />
              </Item>
              <Item floatingLabel style={{ marginRight: 15 }}>
                <Label style={Styles.defaultFont}>Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={v => this.props.ChangeInputLogin("password", v)}
                />
              </Item>

              <Spacer size={20} />

              <Button
                block
                style={{ margin: 15, marginTop: 40 }}
                onPress={this.handleSubmit}
              >
                <Text>Login</Text>
              </Button>
            </Form>

            {errorMessage && <Messages message={errorMessage} />}
          </View>
        </Content>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  isLoading: state.messages.loading,
  errorMessage: state.messages.error,
  email: state.user.email,
  password: state.user.password
});

const mapDispatchToProps = {
  FakeLogin,
  ChangeInputLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
