/* @flow */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  TouchableHighlight
} from "react-native";

import { List, ListItem, SearchBar } from "react-native-elements";
import { vendorListProfile } from "../config/data";

export default class VendorListView extends Component {
  constructor(props) {
    super(props);
    //Set the datasource conditions for the vendor datasource
    const vendorDs = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      something: "",
      dataSource: vendorDs.cloneWithRows(vendorListProfile)
    };
  }

  //go to profile page
  goToProfile = vendorProfile => {
    this.props.navigation.navigate("VendorProfile", vendorProfile);
  };

  //renders each vendors data into a single image element containing name and image
  _renderRow = (rowData: string, sectionID: number, rowID: number) => {
    return (
      <TouchableHighlight
        key={rowData.key}
        style={styles.vendorRow}
        onPress={() => this.goToProfile(rowData)}
      >
        <Image
          style={styles.vendorthumbnail}
          source={{ uri: rowData.imageURL }}
        >
          <Text style={styles.vendorText}>
            {rowData.name}
          </Text>
          <Text>
            Rating goes here
          </Text>
        </Image>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vendorRow: {
    height: 200,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  vendorthumbnail: {
    flex: 1
  },
  vendorText: {
    flex: 1,
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlignVertical: "bottom",
    marginBottom: 5,
    marginLeft: 10
  }
});
