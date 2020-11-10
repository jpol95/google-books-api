import React from 'react'
import './ResultItemButtons.css'

export default class ResultItemsButtons extends React.Component{
    render(){
       return <> <button onClick={() => window.open(`${this.props.buyLink}`,'_blank')} className="buy">Buy</button>
            <button  onClick={() => window.open(`${this.props.previewLink}`,'_blank')}>Preview</button> </>
    }
}