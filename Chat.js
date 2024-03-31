import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useNavigation } from '@react-navigation/native';

const initialChats = [
  { id: '1', name: 'Faria', lastMessage: 'Gate pe pohnch k btao', unreadMessages: 3, dp: require('./assets/bunny.jpg'),messages: []  },
  { id: '2', name: 'Areej', lastMessage: 'Aj roast nhi krna?', unreadMessages: 0, dp: require('./assets/duck.jpg'),messages: []  },
  { id: '3', name: 'Umair', lastMessage: 'Simba kesa hai?', unreadMessages: 1, dp: require('./assets/cat.jpg'),messages: []  },
  // Add more chat data as needed
];

const ChatListScreen = () => {
  const [chats, setChats] = useState(initialChats);
  const navigation = useNavigation();

  const deleteChat = (id) => {
    const updatedChats = chats.filter(chat => chat.id !== id);
    setChats(updatedChats);
  };

  const navigateToInbox = (item) => {

    console.log('Navigating to Inbox with item:', item);
    navigation.navigate('Inbox', { item });

  };

  const renderChatItem = ({ item }) => {
    const rightButtons = [
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteChat(item.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>,
    ];

    return (
      <Swipeable rightButtons={rightButtons}>
        <TouchableOpacity style={styles.chatItem} onPress={() => navigateToInbox(item)}>
          <Image source={item.dp} style={styles.dp} />
          <View style={styles.chatInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </View>
          {item.unreadMessages > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{item.unreadMessages}</Text>
            </View>
          )}
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#555',
  },
  unreadBadge: {
    backgroundColor: 'green',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  unreadCount: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 75,
    height: '100%',
  },
});

export default ChatListScreen;
