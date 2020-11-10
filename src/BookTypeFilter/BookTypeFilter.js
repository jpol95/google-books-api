import React from 'react'

class BookTypeFilter extends React.Component{
    render(){
        return <><label htmlFor="book-type">Book Type</label>
        <select onChange={e => this.props.handleBookFilter(e.target.value)} id="book-type">
            <option value="All">All</option>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="ebooks">ebooks</option>
        </select></>
    }
}

export default BookTypeFilter