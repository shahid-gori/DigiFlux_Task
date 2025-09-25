import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetails = ({route}: any) => {
  const {productId} = route.params;

  const product = useSelector((state: any) =>
    state.products?.list.find((p: any) => p.id === productId),
  );

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={{color:'#d11'}}>Product not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>{product?.price}</Text>
      <Text style={styles.description}>{product?.description}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  image: {width: '100%', height: 250, resizeMode: 'contain'},
  title: {fontSize: 20, color: '#000', fontWeight: 'bold', marginVertical: 8},
  price: {fontSize: 18, color: 'green', marginBottom: 8},
  description: {fontSize: 14, color: '#555'},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
