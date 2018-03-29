import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from "native-base";
import { View } from "react-native";

// Components
import LoginScreen from "@components/login/Login";
import Loading from "@components/loading/Loading";

// Actions
import { Logout } from "@components/login/LoginActions";

// Styles
import Styles from "@components/dashboard/DashboardStyles";

class Dashboard extends Component {
  static propTypes = {
    Logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    isAuthenticated: false,
    isLoading: true
  };

  render = () => {
    const { isAuthenticated, isLoading } = this.props;

    if (!isAuthenticated) {
      return <LoginScreen />;
    } else if (isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        <Header style={{ borderBottomWidth: 0 }}>
          <Left>
            <Button transparent onPress={this.props.Logout}>
              <Icon name="exit" />
            </Button>
          </Left>
          <Body>
            <Title>React Native Starter</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View style={Styles.section_content}>
            <Text>
              This is the place where I will render all my secret data...
              shhhhh!
            </Text>
          </View>
        </Content>
      </Container>
    );
  };
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.messages.loading
});

const mapDispatchToProps = {
  Logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
