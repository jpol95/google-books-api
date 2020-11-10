import React from 'react'
import ResultItemButtons from '../ResultItemButtons/ResultItemButtons'
import './ResultItem.css'

export default class ResultItem extends React.Component{
    buyLink = `window.open('${this.props.buyLink}','_blank')`
    booksLink = `window.open('${this.props.previewLink}','_blank')`
    render(){
        return <div className="result">
        <h3>{this.props.results.name}</h3>
        <div className="resultrow">
        <img src={this.props.results.image} alt="result"/>
        <span>
            Author: {this.props.results.author}<br/>
            Cost: {this.props.results.cost} <br/><br/>
            Description: {this.props.results.description}<br/>
            <ResultItemButtons buyLink = {this.props.results.buyLink}  previewLink = {this.props.results.previewLink} />
        </span>
    </div>
    </div>
    }
}