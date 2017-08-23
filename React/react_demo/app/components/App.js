
import React from 'react'
import TweetBox from './TweetBox'
import Slider from './Slider'
import HelloWorld from './HelloWorld'
import PasswordInput from './PasswordInput'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import LikeButton from './LikeButton'
import ColorList from './ColorList'
import AutoCompleteBox from './AutoComplete.js';
import BottomNavigation from './BottomNavigation.js'

// <TweetBox maxTweetLength="50" />
// <Slider />
// <HelloWorld />
// <PasswordInput />
// <MuiThemeProvider>
//   <RaisedButton label="winning" />
// </MuiThemeProvider>

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.onLikeButtonClick = this.onLikeButtonClick.bind(this)
    this.state = {
      likesCount: 0,
      colors: ['red', 'green', 'blue'],
      // input: 'hello'
    }
  }

  onLikeButtonClick() {
    this.setState({likesCount: this.state.likesCount + 1})
  }

  render() {
    const { likesCount, colors } = this.state

    return <div>
      <h1>React Component Demo</h1>
      <LikeButton clickHandler={this.onLikeButtonClick} count={likesCount} />
      <ColorList colors={colors} />
      <MuiThemeProvider>
        <AutoCompleteBox />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <BottomNavigation />
      </MuiThemeProvider>
    </div>
  }

}
