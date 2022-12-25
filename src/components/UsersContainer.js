import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UsersContainer = ({ usersData, fetchUsers}) => {
  console.log('from usersContainer', usersData.data);


  useEffect(() => {
    fetchUsers()
  }, [])

  return usersData.loading ? (
    <h2>Loading...</h2>
  ) : usersData.error ? (
    <h2>{usersData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <ul>
        {usersData.data && usersData.data && usersData.data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    usersData: state.users.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)