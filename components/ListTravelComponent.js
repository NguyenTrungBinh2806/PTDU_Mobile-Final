import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar, Image, Card } from 'react-native-elements';
import { PLACES } from '../shared/place';
 
class ListTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: PLACES
    };
  }
  render() {
    return (
        <FlatList data={this.state.places}
          renderItem={({ item, index }) => this.renderListItem(item, index)}
          keyExtractor={(item) => item.id.toString()} />
    );
  }
  renderListItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem key={index} onPress={() => navigate('PlaceDetail', { placeId: item.id })}>
        {/* <Avatar source={require('./images/hoian.jpg') }/> */}
        <Card>
        <Image source={require('./images/puluong.jpg')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
            </Image>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
        </Card>
      </ListItem>
    );
  };
  // onPlaceSelect(item) {
  //   //alert(item.id);
  //   this.setState({ selectedPlace: item });
  // }
}
export default ListTravel;