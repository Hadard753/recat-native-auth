import React, { Component } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { connect } from 'react-redux';

import ExampleCardDetails from './ExampleCardDetails';
import { CardModel } from '../models/Card.model';
import { AppState } from '../models/AppState.model';

class ExampleCardsList extends Component<{ cards: CardModel[] }, {cards: CardModel[]}> {
//   state = { cards: [] };

  componentWillMount() {
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then((response: Response) => response.json().then(
    //       (data: CardModel[]) => this.setState({ cards: data })
    //   ));
    //   .then((response: Response) => console.log(response));//
  }

  renderAlbum(item) {
    return <ExampleCardDetails key={item.item.title} album={item.item} />
  }

  render() {
    return (
        <FlatList 
            data={this.props.cards}
            renderItem={this.renderAlbum}
        />
    );
  }
}

const mapStateToProps = (state: AppState) => {
    return { cards: state.cards };
};

export default connect(mapStateToProps)(ExampleCardsList);
