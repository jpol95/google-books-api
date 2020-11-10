import React from 'react'

class PrintTypeFilter extends React.Component{
    render(){
         
      return   <><label htmlFor="print-type">Filter</label>
        <select onChange={e => this.props.handlePrintFilter(e.target.value)} id="print-type">
            <option value="All">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
        </select></>
    
}
}

export default PrintTypeFilter