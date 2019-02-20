import React from 'react';
import Chart from './Chart'
import Status from './Status'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      threshold: '6.00'
    }
    this.updateThreshold = this.updateThreshold.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:9000/prices')
      .then((response) => response.json())
      .then((data) => this.setState({data}))
      .catch((err) => {
        console.warn(err)
      })
  }

  render() {
    return(
      <div>
        <Status
          threshold={this.state.threshold}
          data={this.state.data}
          as='h1'/>
        <label htmlFor='threshold'>Threshold (€/KWh)</label>
        <input
          onChange={this.updateThreshold}
          value={this.state.threshold} 
          name="threshold"
          type="number" 
          step="0.01"></input>
        <Chart data={this.state.data}/>
      </div>
    );
  }

  updateThreshold(e) {
    this.setState({
      threshold: e.target.value
    })
  }
}

export default App;
