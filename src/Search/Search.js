import React from 'react'

export default class Search extends React.Component{
render(){
    return <><label htmlFor="search">Search</label>
    <input onChange={e => {this.props.handleQuery(e.target.value)}} type="text" id="search" size="180px"/></>
}
}