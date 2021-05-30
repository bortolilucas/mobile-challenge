import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const { top, bottom } = useSafeAreaInsets();
  const page = React.useRef(1);

  const fetchList = React.useCallback(
    (concat = false) =>
      dispatch(Api.getExpenses({ page: page.current }))
        .then(data => {
          if (concat) {
            setList(prevList => [...prevList, ...data]);
          } else {
            setList(data);
          }
        })
        .catch(err => err?.message && Alert.alert('Erro', err.message)),
    [dispatch],
  );

  useFocusEffect(
    React.useCallback(() => {
      page.current = 1;
      dispatch(loadingAction(true));
      fetchList().finally(() => dispatch(loadingAction(false)));
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
    page.current = 1;
    setRefreshing(true);
    fetchList().finally(() => setRefreshing(false));
  };

  const onEndReached = () => {
    page.current++;
    fetchList(true);
  };

  const renderItem = ({ item }) => (
    <ExpenseListItem item={item} onEdit={onEdit} onDelete={onDelete} />
  );

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        style={styles.flatlist}
        contentContainerStyle={[
          styles.flatlistContainer,
          { paddingBottom: bottom || 15 },
        ]}
        ListHeaderComponent={<HomeHeader />}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          !loading && <EmptyList text="Nenhuma despesa cadastrada" />
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
