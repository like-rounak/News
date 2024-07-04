import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { getTopHeadlines } from '../services/newsApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomModal from '../components/CustomModal';

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [sortOrder, setSortOrder] = useState('publishedAt');
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isSortModalVisible, setSortModalVisible] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getTopHeadlines();
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
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='VIEW NOW' 
        />
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Select Category" onPress={() => setCategoryModalVisible(true)} />
        <Button title="Sort By" onPress={() => setSortModalVisible(true)} />
      </View>
      <FlatList
        data={articles}
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

export default HomeScreen;
