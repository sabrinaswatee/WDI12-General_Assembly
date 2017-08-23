import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteBox extends Component {
  constructor (props) {
    super(props)
    this.fetchUser = this.fetchUser.bind(this);
    this.state = {
      dataSource: [],
    };
  }

  fetchUser(value) {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input={value}&key=AIzaSyCoz-g_D9UGP1VEbwrk4HlWwFdDuz7m3M8`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // this.setState({
      //   dataSource: {
      //     data
      //   }
      // })
    })
  }

  // fetchUser (value) {
  //   this.setState({
  //     dataSource: [
  //       value,
  //       value + value,
  //       value + value + value,
  //     ],
  //   });
  // }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.fetchUser}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      </div>
    );
  }
}
