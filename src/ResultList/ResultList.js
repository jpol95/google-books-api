import React from 'react'
import ResultItem from '../ResultItem/ResultItem'

export default class ResultList extends React.Component{
    makeMap(){
       return  this.props.results.map(current => {
           return <ResultItem key = {current.id} results = {current} />
        })
    }
    render(){
        // console.log(this.makeMap())
       return <section className="results">
        <h2>Results</h2>
        {this.makeMap()}
        </section>
    }
}