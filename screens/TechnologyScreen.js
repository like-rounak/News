import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { getTopHeadlines } from '../services/newsApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TechnologyScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getTopHeadlines('technology');
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Article', { article: item })}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Image source={{ uri: item.urlToImage }} />
        <Text style={{ marginBottom: 10 }}>{item.description}</Text>
        <Text style={{ marginBottom: 10, fontStyle: 'italic' }}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={renderItem}
      />
      <Footer />
    </View>
  );
};

export default TechnologyScreen;