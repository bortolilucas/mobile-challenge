import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/home/HomeHeader';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.flatlist} ListHeaderComponent={<HomeHeader />} />
    </SafeAreaView>
  );
};

export default HomeScreen;
