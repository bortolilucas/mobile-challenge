import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import EmptyList from '../../components/home/EmptyList';
import ExpenseListItem from '../../components/home/ExpenseListItem';
import HomeHeader from '../../components/home/HomeHeader';
import Screens from '../../constants/Screens';
import * as Api from '../../helpers/api';
import { loadingAction } from '../../store/actions/ui';
import { loadingSelector } from '../../store/selectors/ui';
import styles from './styles';

const keyExtractor = item => item._id;

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const [list, setList] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchList = React.useCallback(
    () =>
      dispatch(Api.getExpenses({ page: 1 }))
        .then(data => setList(data))
        .catch(err => err?.message && Alert.alert('Erro', err.message)),
    [dispatch],
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadingAction(true));
      fetchList({ shouldLoad: true }).finally(() =>
        dispatch(loadingAction(false)),
      );
    }, [dispatch, fetchList]),
  );

  const onEdit = React.useCallback(
    item => {
      navigation.navigate(Screens.EDIT, { type: 'edit', item });
    },
    [navigation],
  );

  const onDelete = React.useCallback(
    item => {
      const onYes = () => {
        dispatch(loadingAction(true));
        dispatch(Api.deleteExpense({ id: item._id }))
          .then(() =>
            setList(prevList => prevList.filter(e => e._id !== item._id)),
          )
          .catch(err => err?.message && Alert.alert('Erro', err.message))
          .finally(() => dispatch(loadingAction(false)));
      };
      Alert.alert(
        'Atenção',
        `Tem certeza que deseja deletar o item ${item.item}?`,
        [{ text: 'Sim', onPress: onYes }, { text: 'Não' }],
      );
    },
    [dispatch],
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchList().finally(() => setRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <ExpenseListItem item={item} onEdit={onEdit} onDelete={onDelete} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        ListHeaderComponent={<HomeHeader />}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          !loading && <EmptyList text="Nenhuma despesa cadastrada" />
        }
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
