import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './store/productSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const mockProducts = [
  {
    id: 1,
    title: 'Mock T-Shirt',
    price: 29.99,
    description: 'A cool mock t-shirt for demo.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Mock Shoes',
    price: 59.99,
    description: 'Stylish mock shoes.',
    image: 'https://via.placeholder.com/150',
  },
];

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();
  const {list, loading, error} = useSelector((state: any) => state.products);

  //   console.log('list', list);

  useEffect(() => {
    dispatch<any>(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{color: '#888'}}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <FlatList
        data={mockProducts}
        keyExtractor={item => item?.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item?.image}} style={styles.image} />
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
        )}
      />
    );
  }

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate('ProductDetails', {productId: item?.id})
          }>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.price}>{item?.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {width: 100, height: 100, resizeMode: 'contain'},
  title: {fontSize: 16, fontWeight: 'bold', color: '#000'},
  price: {fontSize: 14, color: 'green'},
});
