import React, {Component} from 'react';
import endpoint from '../endpoint';
import axios from "axios";
import ContentLoader from "react-content-loader";

class Auth extends Component {

    componentWillMount = () => {
        const code = new URLSearchParams(this.props.location.search).get("code");

        axios.post(`${endpoint.getTokenURL}`, {code: code})
            .then(response => {
                const data = response.data.data;
                localStorage.setItem('access_token', data.access_token);
                this.getProfile(data.access_token);
            })
            .catch(e => {
                console.log(e.message);
                this.props.history.push('/error');
            });

    };

    getProfile = (access_token) => {

        let headers = {
            headers: {'Authorization': 'Bearer ' + access_token}
        };
        let url = `${endpoint.getProfile}`;

        axios.get(url, headers)
            .then(response =>{
                const data = response.data;
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('profile', JSON.stringify(data));
                this.props.history.push('/');
            })
            .catch(e => {
                console.log(e.message);
                this.props.history.push('/error');
            });
    };

    render() {
        return (
            <div className="App-Callbacks">
                <div className="App-SignIn">
                    <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
                        {/* Pure SVG */}
                        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </div>
            </div>
        );
    }
}

export default Auth;
