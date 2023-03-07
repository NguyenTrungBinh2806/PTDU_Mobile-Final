import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { PLACES } from '../shared/place';
class RenderPlace extends Component {
  render() {
    const place = this.props.place;
    if (place != null) {
      return (
        <Card>
          <Image source={require('./images/puluong.jpg')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Card.FeaturedTitle>{place.name}</Card.FeaturedTitle>
          </Image>
          <ScrollView style={{height: 500}}>
            <Text style={{ margin: 10, marginBottom: 20}}>{place.text}</Text>
          </ScrollView>
        </Card>
      );
    }
    return (<View />);
  }
}

class PlaceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: PLACES
    };
  }
  render() {
    const placeId = parseInt(this.props.route.params.placeId);
    const place = this.state.places[placeId];
    return (
      <RenderPlace place={place} />
    );
  }
}
export default PlaceDetail;