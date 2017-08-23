import React from 'react'
import './TweetBox.css'

export default class TweetBox extends React.Component {

  constructor(props) {
    super(props)
    this.onTextAreaChange = this.onTextAreaChange.bind(this)
    this.state = {
      content: '',
      maxTweetLength: this.props.maxTweetLength || 140
    }

  }

  onTextAreaChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    var {content, maxTweetLength} = this.state;
    var isDisabled = content.length <= 0 || content.length > maxTweetLength;
    var spanClass = maxTweetLength - content.length < 20 ? 'warning' : '';

    return <div>
      <textarea onChange={this.onTextAreaChange}></textarea>
      <span className={spanClass}>{maxTweetLength - content.length}</span>
      <button disabled={isDisabled}>Tweet</button>
    </div>
  }
}
