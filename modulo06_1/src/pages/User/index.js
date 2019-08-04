import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
    Container,
    Headers,
    Avatar,
    Name,
    Bio,
    Page,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        page: 1,
        loading: false,
    };

    async componentDidMount() {
        await this.loadData();
    }

    loadMore = async () => {
        await this.loadData(true);
    };

    refreshList = () => {
        const { page } = this.state;
        if (page > 1) {
            this.loadData(false);
        }
    };

    handleNavigate = repository => {
        const { navigation } = this.props;
        navigation.navigate('Repository', { repository });
    };

    async loadData(nextPage) {
        this.setState({ loading: true });
        const { navigation } = this.props;
        console.tron.log(
            `loadData - navigation: ${JSON.stringify(navigation)}`
        );
        let { page } = this.state;
        const user = navigation.getParam('user');

        if (nextPage !== undefined && nextPage) {
            page += 1;
        } else if (nextPage !== undefined) {
            page -= 1;
        }

        this.setState({ page });
        console.tron.log(`loadData - page: ${page}`);
        const response = await api.get(
            `/users/${user.login}/starred?page=${page}`
        );

        this.setState({ stars: response.data, loading: false });
    }

    render() {
        const { navigation } = this.props;
        const { stars } = this.state;
        const { loading } = this.state;
        const { page } = this.state;

        const user = navigation.getParam('user');

        return (
            <Container>
                <Headers>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Headers>
                <Page>Página: {page}</Page>
                {loading ? (
                    <ActivityIndicator color="#7159c1" />
                ) : (
                    <Stars
                        data={stars}
                        keyExtractor={star => String(star.id)}
                        onEndReachedThreshold={0.2}
                        onEndReached={this.loadMore}
                        onRefresh={this.refreshList}
                        refreshing={loading}
                        renderItem={({ item }) => (
                            <Starred onPress={() => this.handleNavigate(item)}>
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                )}
            </Container>
        );
    }
}
