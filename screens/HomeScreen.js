import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { getTopHeadlines } from '../services/newsApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomModal from '../components/CustomModal';

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [sortOrder, setSortOrder] = useState('publishedAt');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isSortModalVisible, setSortModalVisible] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getTopHeadlines(category, sortOrder);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [category, sortOrder]);

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));

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
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setCategoryModalVisible(true)}>
          <Text style={styles.buttonText}>Select Category</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortModalVisible(true)}>
          <Text style={styles.buttonText}>Sort By</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.url}
        renderItem={renderItem}
      />
      <Footer />
      <CustomModal
        isVisible={isCategoryModalVisible}
        onClose={() => setCategoryModalVisible(false)}
        options={[
          { label: 'General', value: 'general' },
          { label: 'Business', value: 'business' },
          { label: 'Technology', value: 'technology' },
          { label: 'Health', value: 'health' },
          { label: 'Science', value: 'science' },
          { label: 'Sports', value: 'sports' },
        ]}
        onSelect={(value) => setCategory(value)}
      />
      <CustomModal
        isVisible={isSortModalVisible}
        onClose={() => setSortModalVisible(false)}
        options={[
          { label: 'Published At', value: 'publishedAt' },
          { label: 'Popularity', value: 'popularity' },
          { label: 'Relevancy', value: 'relevancy' },
        ]}
        onSelect={(value) => setSortOrder(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: 'blue',
  },
});

export default HomeScreen;
