import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState ({
      query: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.pokeSearch(this.state.query);
    this.setState({query: ''});
  }

  render() {
    return (
      <div>
        <form action="" >
          <input type="text" onChange={this.handleChange} value={this.state.query}/>
          <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }

}

export default Search;