import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './common';
import { CardModel } from '../models/Card.model';
import * as actions from '../actions';
import { AppState } from '../models/AppState.model';

export interface ExampleCardProps {
  album: CardModel;
  selectedCardId: number;
  selectCard: (cardId: number) => { type: string; payload: number };
}

class ExampleCardDetails extends Component<ExampleCardProps, {}> {
    getStyle() {
        return this.props.album.id === this.props.selectedCardId ? styles.activeCardStyle : undefined;
    };
  
    render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectCard(this.props.album.id)}>
        <View style={this.getStyle()}>
          <Card>
            <CardSection>
              <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
              </View>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
              </View>
            </CardSection>

            <CardSection>
              <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
              <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    activeCardStyle: {
        borderWidth: 4, 
        borderColor: 'green'
    },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: undefined
  }
});

const mapStateToProps = (state: AppState) => {
  return { selectedCardId: state.selectedCardId };
};

export default connect(
  mapStateToProps,
  actions
)(ExampleCardDetails);
