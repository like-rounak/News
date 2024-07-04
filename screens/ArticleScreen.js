import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <Card>
        <Card.Title>{article.title}</Card.Title>
        <Card.Image source={{ uri: article.urlToImage }} />
        <Text style={styles.description}>{article.description}</Text>
        <Text>{article.author}</Text>
        <Text>{new Date(article.publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.fullText}>{article.content.replace(/\[\+\d+ chars\]/, '')}</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 10,
  },
  fullText: {
    marginTop: 10,
  },
});

export default ArticleScreen;
