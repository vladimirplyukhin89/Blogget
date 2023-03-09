import React from 'react'

export default class ComponentClass extends React.PureComponent {
  render() {
    return <p>{this.props.str}</p>
  }
}
