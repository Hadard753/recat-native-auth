import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ExampleCardDetails from './ExampleCardDetails';

export interface Album {
    title: string,
    url: string,
    image: string,
    artist: string,
    thumbnail_image: string
};

class ExampleCardsList extends Component<{}, {albums: Album[]}> {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response: Response) => response.json().then(
          (data: Album[]) => this.setState({ albums: data })
      ));
    //   .then((response: Response) => console.log(response));//
  }

  renderAlbums() {
    return this.state.albums.map((album: Album) =>
      <ExampleCardDetails key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default ExampleCardsList;
