import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, KeyboardAvoidingView } from 'react-native';

export const Home = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there!', sender: 'user' },
    { id: 2, text: 'Hello!', sender: 'friend' },
    { id: 3, text: 'How are you?', sender: 'user' },
    { id: 4, text: 'I\'m good, thanks for asking.', sender: 'friend' },
  ]);


  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#F3F3F3',
      }}
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      keyboardVerticalOffset={
        Platform.OS == 'ios' ? 100 : 0
      }>



      <View>
        <View style={{
          backgroundColor: '#fff',
          marginHorizontal: 5,
          marginBottom: 6,
          borderRadius: 9,
        }}>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 8,
              borderRadius: 7,
              margin: 7,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
              }}>
              <TextInput


                selectionColor={'#000'}
                // ref={inputRef}
                allowFontScaling={false}
                onChangeText={text => {
                  setMessage(text)
                }}
                placeholder={'Write Something here'}
                value={message}
                placeholderTextColor={'#B7B7B7'}
                style={{
                  flex: 1,
                  // minHeight: geticonsize(32),
                  padding: 0,
                  paddingVertical: Platform.OS == 'ios' ? 9 : 0,
                  marginVertical: 5,
                  marginRight: 20,
                  maxHeight: 100,
                  color: '#000',
                }}
                multiline={true}
                contextMenuHidden={false}></TextInput>


            </View>
          </View>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: 80,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  messages: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
    marginBottom: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  friendMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCF8C6',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    // height: 80,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  sendButton: {
    width: 80,
    height: 40,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15

  },



});

