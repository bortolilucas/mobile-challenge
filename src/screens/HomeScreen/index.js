import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import EmptyList from '../../components/home/EmptyList';
import ExpenseListItem from '../../components/home/ExpenseListItem';
import HomeHeader from '../../components/home/HomeHeader';
import Colors from '../../constants/Colors';
import Screens from '../../constants/Screens';
import * as Api from '../../helpers/api';
import { isEmpty } from '../../helpers/utils';
import { loadingAction } from '../../store/actions/ui';
import { loadingSelector } from '../../store/selectors/ui';
import styles from './styles';

const keyExtractor = item => item._id;

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const [list, setList] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const page = React.useRef(1);
  const pageDone = React.useRef(false);
  const preventFetching = React.useRef(false);

  const fetchList = React.useCallback(
    (concat = false) => {
      return dispatch(Api.getExpenses({ page: page.current }))
        .then(data => {
          if (concat) {
            setList(prevList => [...prevList, ...data]);
          } else {
            setList(data);
          }
          if (isEmpty(data)) {
            pageDone.current = true;
          }
        })
        .catch(err => err?.message && Alert.alert('Erro', err.message));
    },
    [dispatch],
  );

  useFocusEffect(
    React.useCallback(() => {
      if (!preventFetching.current) {
        page.current = 1;
        pageDone.current = false;
        dispatch(loadingAction(true));
        fetchList().finally(() => dispatch(loadingAction(false)));
      }
      preventFetching.current = false;
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

  const onItemPress = React.useCallback(
    item => {
      preventFetching.current = true;
      navigation.navigate(Screens.DETAIL, { item });
    },
    [navigation],
  );

  const onRefresh = () => {
    page.current = 1;
    pageDone.current = false;
    setRefreshing(true);
    fetchList().finally(() => setRefreshing(false));
  };

  const onEndReached = () => {
    if (pageDone.current) {
      return;
    }
    page.current++;
    setPageLoading(true);
    fetchList(true).finally(() => setPageLoading(false));
  };

  const renderItem = ({ item }) => (
    <ExpenseListItem
      item={item}
      onEdit={onEdit}
      onDelete={onDelete}
      onPress={onItemPress}
    />
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
        ListFooterComponent={
          pageLoading && (
            <View style={styles.pageLoadingContainer}>
              <ActivityIndicator size="large" color={Colors.PRIMARY} />
            </View>
          )
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
