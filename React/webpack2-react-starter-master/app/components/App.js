import React from 'react'
import PasswordInput from './PasswordInput'
import Card from './Card'

// <h1>hello world</h1>
// <label>example password checker:</label>
// <PasswordInput />

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      input: '',
      user: {
        userName: '',
        realName: ''
      }
    }
  }

  fetchUser(userName) {
    const url = `https://api.github.com/users/${userName}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        user: {
          userName: data.login,
          realName: data.name
        }
      })
    })
  }

  handleClick() {
    this.fetchUser(this.state.input)
  }

  handleInputChange(event) {
    this.setState({ input: event.target.value })
  }

  render() {
    // const { user } = this.state.user

    return <div>
      <input onChange={this.handleInputChange}/>
      <button onClick={this.handleClick}>Search User</button>
      <Card user={this.state.user}/>
    </div>
  }

}

module.exports = App
