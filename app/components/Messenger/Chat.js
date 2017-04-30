/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessages: []
    };
  }

//This function will add a new message to the chatMessage state array
  _onSendMessage = newMessage => {
    this.setState({
      chatMessages: GiftedChat.append(this.state.chatMessages, newMessage)
    });
  };

  render() {
    return (
      <GiftedChat
        onSend={message => this._onSendMessage(message)}
        messages={this.state.chatMessages}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
