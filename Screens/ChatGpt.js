import React, { useState } from 'react';
import { View, TextInput, FlatList, Button, StyleSheet, Text } from 'react-native';

const ChatGptScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    // Implement the API call to send user input to the ChatGPT model
    // and receive the response
    // For example:
    // const response = await sendInputToChatGptApi(inputValue);

    // For the sake of this example, let's just pretend we have the response
    const response = "This is a sample response from the ChatGPT model.";

    setMessages([...messages, { author: 'bot', text: response }]);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={[styles.messageText, item.author === 'bot' ? styles.botMessage : styles.userMessage]}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={text => setInputValue(text)}
          style={styles.input}
        />
        <Button
          title="Send"
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  messageText: {
    fontSize: 16,
  },
  botMessage: {
    color: 'blue',
  },
  userMessage: {
    color: 'black',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default ChatGptScreen;
