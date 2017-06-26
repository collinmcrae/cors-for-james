import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    testCorsGet() {
        $.ajax({
            url: "http://localhost:9090/auth/health",
            type: "GET",
            crossDomain: true,
            success: (response) => {
                alert("I worked!");
            },
            error: function (xhr, status) {
                alert("Didn't work. Check the console");
            }
        });
    }

    testCorsPost() {
        $.ajax({
            url: "http://localhost:8081/auth/oauth/token",
            type: "POST",
            crossDomain: true,
            contentType: "application/x-www-form-urlencoded",
            headers: {"Authorization" : "Basic bXNpLWNsaWVudDptc2ktc2VjcmV0"},
            dataType:"json",
            data: {"grant_type": "client_credentials"},
            success: (response) => {
                alert("Got token response");
            },
            error: function (xhr, status) {
                alert("Check the console!");
            }
        });
    }

    render() {
        return (
            <div>
                <h1>CORS test</h1>
                <button onClick={this.testCorsGet}>GET Example</button>
                <button onClick={this.testCorsPost}>POST Example</button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
