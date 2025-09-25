import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

type Product = {
  id: number;
  title: string;
  image: string;
};

const HomeScreen = () => {
  const username = useSelector((state: any) => state.auth.user?.username);
  const products: Product[] = useSelector((state: any) => state.products.list);
  //   console.log(products)
  const [search, setSearch] = useState('');

  const filteredProducts = products?.filter((item: Product) =>
    item?.title.toLowerCase().includes(search.toLowerCase()),
  );

// console.log(filteredProducts)

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 100],
      [60, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 50],
      [1, 0],
      Extrapolation.CLAMP,
    );

    return {
      height,
      opacity,
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        <Text style={styles.greeting}>Hi, {username || 'Guest'}</Text>
      </Animated.View>

      <TextInput
        style={styles.search}
        placeholder="Search products.."
        placeholderTextColor={'#000'}
        value={search}
        onChangeText={setSearch}
      />

      <Animated.FlatList
        data={filteredProducts}
        keyExtractor={item => item?.id.toString()}
        onScroll={scrollHandler}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.title}>{item?.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  greeting: {fontSize: 20, fontWeight: 'bold', color: '#000'},
  search: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  image: {width: 50, height: 50, marginRight: 10},
  title: {flex: 1, fontSize: 14, color: '#000'},
});
