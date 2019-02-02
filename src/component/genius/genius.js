import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chatuser'
import UserCard from '../usercard/usercard'

@connect(
  state => ({ ...state.chatuser }),
  { getUserList }
)
class Genius extends Component {
  componentDidMount() {
    this.props.getUserList('boss')
  }

  render() {
    return <UserCard data={this.props.userList} />
  }
}

export default Genius