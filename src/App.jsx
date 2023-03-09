import React from 'react'
import randomWords from 'random-words'

import ComponentClass from './components/ComponentClass/ComponentClass'
import PureComponentClass from './components/PureComponentClass/PureComponentClass'
import ComponentMemoFunc from './components/ComponentFunc'
import Button from './components/Button'

export default class App extends React.Component {
  state = {
    str: 'start',
    count: 0,
    pure: 'pure',
    func: 'func',
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        str: randomWords(),
        count: this.count++,
        func: randomWords(),
      })
    }, 1000)
  }

  render() {
    return (
      <header className="App-header">
        <Button text="Click" />
        <ComponentClass str={this.state.str} />
        <PureComponentClass str={this.state.pure} />
        <ComponentMemoFunc str={this.state.func} />
      </header>
    )
  }
}
