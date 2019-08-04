import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { Container } from './styles';

export default class Repository extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('repository').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    state = {
        htmlUrl: '',
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const htmlUrl = navigation.getParam('repository').html_url;

        this.setState({ htmlUrl });
    }

    render() {
        const { htmlUrl } = this.state;

        return (
            <Container>
                <WebView source={{ uri: htmlUrl }} style={{ flex: 1 }} />
            </Container>
        );
    }
}
