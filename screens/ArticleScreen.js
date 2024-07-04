import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <Card>
        <Card.Title>{article.title}</Card.Title>
        <Card.Image source={{ uri: article.urlToImage }} />
        <Text style={{ marginBottom: 10 }}>{article.content}</Text>
        <Text>{article.author}</Text>
        <Text>{article.publishedAt}</Text>
      </Card>
    </ScrollView>
  );
};

export default ArticleScreen;
