import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const InboxScreen = ({ route }) => {
  const chat = route.params.item;
  const [replyMessage, setReplyMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const handleReply = () => {
    const newMessage = { id: sentMessages.length + 1, text: replyMessage }; // Create a new message object
    setSentMessages([...sentMessages, newMessage]); // Add the new message to the sent messages array
    setReplyMessage(''); // Clear the reply input field after replying
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Image source={chat.dp} style={styles.dp} />
        <View style={styles.messageContainer}>
          <Text style={styles.name}>{chat.name}</Text>
          {chat.messages.map(message => (
            <View key={message.id}>
              <Text style={styles.receivedMessage}>{message.text}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.time}>10:30 AM</Text>
      </View>
      <View style={styles.replyContainer}>
        <TextInput
          style={styles.replyInput}
          placeholder="Type your reply..."
          value={replyMessage}
          onChangeText={setReplyMessage}
        />
        <TouchableOpacity style={styles.replyButton} onPress={handleReply}>
          <Text style={styles.replyButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      {/* Display sent messages */}
      {sentMessages.map(message => (
        <View key={message.id} style={[styles.messageContainer, styles.sentMessage]}>
          <Text style={styles.name}>You</Text>
          <Text style={styles.sentMessageText}>{message.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  dp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  receivedMessage: {
    fontSize: 16,
    color: '#555',
  },
  sentMessageText: {
    fontSize: 16,
    color: '#fff',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  replyInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  replyButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 6, // Reduced vertical padding
    paddingHorizontal: 10, // Reduced horizontal padding
    marginVertical: 5,
    marginHorizontal: 2,
    maxWidth: '70%',
    
  },
  
});

export default InboxScreen;
