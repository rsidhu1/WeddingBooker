/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  List,
  ListItem,
  Tile,
  SocialIcon,
  Button
} from "react-native-elements";

export default class VendorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: this.props.navigation.state.params.name
    };
  }

  // functions
  testSomething = () => {
    this.setState({
      something: "cuck"
    });
  };
  _goToChat = vendorData => {
    this.props.navigation.navigate("Chat", vendorData);
  };

  render() {
    const { name, imageURL, key } = this.props.navigation.state.params; //bring in vendorListProfile data

    return (
      <ScrollView style={styles.container}>
        <Tile
          imageSrc={{ uri: imageURL }}
          caption
          title={this.state.something}
          titleStyle={styles.vendorImageTitle}
          onPress={() => this.testSomething(this.state.somethign)}
          style={styles.mainImage}
        />

        <List>
          <ListItem title="Photo Gallery" />
          <ListItem title="Reviews" />
        </List>

        <Button
          raised
          title="MESSAGE FOR QUOTE"
          onPress={() => this._goToChat()}
        />

        <List>
          <SocialIcon title="Instagram" button type="instagram" />
          <SocialIcon title="Twitter" button type="twitter" />
          <SocialIcon title="Facebook" button type="facebook" />
          <SocialIcon title="Snapchat" button type="snapchat" />
          <SocialIcon title="Youtube" button type="youtube" />
        </List>

        <List>
          <ListItem title={key} />
          <ListItem title="Email" />
          <ListItem title="Website" />
        </List>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainImage: {
    flex: 1
  },
  mainImageText: {
    flex: 1,
    color: "white"
  },
  vendorImageTitle: {}
});
