import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection } from '../common';
import { AppState } from '../../models/AppState.model';
import { UserProfile as User } from '../../shared/models/user-profile';

class UserProfile extends Component<{user?: User}> {
  render() {
    let message;
    this.props.user? message = 'Hello ' + this.props.user.email : message = 'Hi there, you are not logged in';
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>{ message }</Text>
        </CardSection>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center'
  }
});

const mapStateToProps = (state: AppState) => {
    return { user: state.authState.user };
};

export default connect(mapStateToProps)(UserProfile);
