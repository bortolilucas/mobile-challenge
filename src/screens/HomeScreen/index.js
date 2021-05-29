import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import EmptyList from '../../components/home/EmptyList';
import HomeHeader from '../../components/home/HomeHeader';
import { getExpenses } from '../../helpers/api';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getExpenses({ page: 1 }))
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={<EmptyList text="Nenhuma despesa cadastrada" />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
