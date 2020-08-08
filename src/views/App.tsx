// import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { ReactNode, Component } from 'react'

// import { testData } from './test-data'
// import { testData1 } from './test-data1'
// import { searchObjProp } from './searchObjProp'
import './App.css'

import logo from './logo.svg'

export default class App extends Component {
  aa(b: any) {
    const a = {
      q1: '0',
      q2: 0,
      q3: 0,
      q4: 0
    }
    if (b === 8) {
      console.log('======>', a)
      // cccc
    }
  }

  componentDidMount() {
    // const aa = searchObjProp(testData1, 6161, 'category-summary-panel')
    // console.log('========dfdf=====332-4-32-432-432-43-======', aa)
    // console.log('========dfdf======', testData)
  }

  render(): ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React，ghy</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          Hello, React world!就这，还是太难了
          <p style={styles.fontSize}>react router（3/4）。想使用4</p>
          <p style={{ paddingTop: 10, color: '#555' }}>react router（3/4）。想使用4</p>
          <p>react router（3/4）。想使用4</p>
          <p>react redux/mobx</p>
          <p>http请求</p>
          <p>保存时，react预检测</p>
          <p>提交预检测</p>
          <p>代码格式化</p>
        </div>
      </div>
    )
  }
}

const styles = {
  fontSize: {
    color: 'red',
    'font-size': '14px'
  }
}
