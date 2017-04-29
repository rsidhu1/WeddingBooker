/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

export default class SearchBar extends Component {
  render() {
    return (
      <SearchBar
        roundAvatar
        lightTheme
        placeholder = 'some text'
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
