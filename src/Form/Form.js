import React from 'react'
import Search from '../Search/Search'
import PrintTypeFilter from '../PrintTypeFilter/PrintTypeFilter'
import BookTypeFilter from '../BookTypeFilter/BookTypeFilter'
import './Form.css'

class Form extends React.Component{
    render(){
        return <div className="search">
        <section className="searchbackground">
        </section>
        <form className="searchform">
        <Search handleQuery={this.props.handleQuery}/>
        <PrintTypeFilter handlePrintFilter={this.props.handlePrintFilter}/>
        <BookTypeFilter handleBookFilter={this.props.handleBookFilter}/> 
        <button type="submit" onClick={e => this.props.handleFormSubmit(e)}>Submit</button>
        <button className="reset">Reset</button>
        </form>
    </div>
    }
}
export default Form