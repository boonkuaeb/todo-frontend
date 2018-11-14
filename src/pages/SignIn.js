import React, {Component} from 'react';
import endpoint from '../endpoint';
import ContentLoader from "react-content-loader";
class SignIn extends Component {

    componentDidMount=()=>{
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        let url = `${endpoint.loginURL}${text}`;
        console.log(url);

        window.location = url;
    };

    render() {
        return (
            <div className="App-SignIn">
                <ContentLoader height={140} speed={1} primaryColor={'#333'} secondaryColor={'#999'}>
                    {/* Pure SVG */}
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                </ContentLoader>
            </div>
        );
    }
}

export default SignIn;
