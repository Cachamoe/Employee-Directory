import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: []
    };

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;
