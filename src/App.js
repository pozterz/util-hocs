import React, { Component } from 'react';
import DataList from './components/DataList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }
  
  render() {
    const { isLoading } = this.state
    return (
      <div className="d-flex justify-content-center pt-5">
        {/* withLoding Block */}
        <div className="d-flex align-items-center flex-column">
          <div>
            <h1>WithLoading</h1>
          </div>
          <div>
            <DataList isLoading={isLoading} propsToDataList={'Props'} />
          </div>
        </div>
        {/* end withLoding Block */}
      </div>
    );
  }
}

export default App;
