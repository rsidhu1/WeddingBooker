/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

//import { categoryList } from "../config/data"; // sample data
import { List, ListItem, SearchBar } from "react-native-elements";
import Grid from "react-native-grid-component";
import { fetchLocation } from "../components/Geolocation/GeoLocation";
import {
  getPopularAndUnpopularVendorCategories
} from "../components/Services/VendorService";

export default class CategoryView extends Component {
  componentWillMount() {
    //right before the component is rendered
    this.state = {
      city: "",
      country: "",
      popularList: [],
      unPopularList: []
    };
  }

  componentDidMount() {
    //when the component is rendered
    this.getLocation();
    getPopularAndUnpopularVendorCategories((popular, unpopular) => {
      this.setState({
        popularList: popular,
        unPopularList: unpopular
      });
    });
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      posData =>
        fetchLocation(
          posData.coords.latitude,
          posData.coords.longitude
        ).then(response =>
          this.setState({
            city: response.city,
            country: response.country
          })
        ), // do something with the data
      error => console.log(error), //do something with the error
      { option: 10000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          round
          lightTheme
          containerStyle={styles.searchBarStyle}
          placeholder="Search for Categories"
        />

        <Text style={styles.searchBarStyle}>
          {this.state.city}
          {this.state.country}
        </Text>

        <Grid
          renderItem={this._renderRow}
          data={this.state.popularList}
          itemsPerRow={2}
          style={styles.gridStyle}
        />
      </View>
    );
  }
  //On click action to press catergory type item.
  categoryPress = () => {
    this.props.navigation.navigate("VendorListView");
  };
  //This will render the image element to pass into the listview
  _renderRow = (rowData: string, sectionID: number, rowID: number) => {
    return (
      <TouchableHighlight
        key={rowData.key}
        style={styles.vendorRow}
        onPress={() => this.categoryPress()}
      >
        <Image style={styles.vendorThumb} source={{ uri: rowData.imageURL }}>
          <Text style={styles.vendorText}>
            {rowData.name}
          </Text>
        </Image>
      </TouchableHighlight>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  gridStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1
  },
  vendorRow: {
    width: 200,
    height: 200,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  vendorThumb: {
    flex: 1
  },
  vendorText: {
    flex: 1,
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlignVertical: "bottom"
  },
  searchBarStyle: {}
});
