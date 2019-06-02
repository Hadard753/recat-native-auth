import React, { Component } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { connect } from 'react-redux';

import ExampleCardDetails from './ExampleCardDetails';
import { CardModel } from '../../models/Card.model';
import { AppState } from '../../models/AppState.model';

class ExampleCardsList extends Component<{ cards: CardModel[] }, {}> {

  renderAlbum(item) {
    return <ExampleCardDetails album={item.item} />
  }

  render() {
    return (
        <FlatList 
            data={this.props.cards}
            renderItem={this.renderAlbum}
            keyExtractor={(card: CardModel) => card.title}
        />
    );
  }
}

const mapStateToProps = (state: AppState) => {
    return { cards: state.cards };
};

export default connect(mapStateToProps)(ExampleCardsList);
