import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  changeButton = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState(prevSate => ({text: 'Subscribed'}))
    } else {
      this.setState(prevSate => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="main">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you!Happy Learning</p>
        <button onClick={this.changeButton} className="btn" type="button">
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
