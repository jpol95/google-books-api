import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Form from './Form/Form'
import ResultList from './ResultList/ResultList'

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`

class App extends React.Component{

  state = {
    results : [],
    printFilter: "All", 
    bookFilter: "All"

  }



  handleBookFilter = (bookFilter) => {
    this.setState({...this.state, bookFilter})
  }

  handlePrintFilter = (printFilter) => {
    this.setState({...this.state, printFilter})
  }

  handleQuery = (query) => {
    this.setState({...this.state, query})
  }


  handleFormSubmit = (event) => {
    event.preventDefault()
    let results
    let queryWithPlus = this.state.query.replace(" ", "+")
    let inputURL = `${BASE_URL}${queryWithPlus}${this.state.bookFilter == "All" ? '': '&filter=' + this.state.bookFilter}${this.state.printFilter == "All" ? '' : '&printType=' + this.state.printFilter}`
    fetch(inputURL).then(res => res.json()).then(data => {
     if (data.items == undefined) return 
      results =  data.items.map((current) => {
      console.log(current)
        return {
          name: current.volumeInfo.title, 
          id: current.id,
          author: current.volumeInfo.authors != undefined ? current.volumeInfo.authors[0] : "N/A", 
          description: current.volumeInfo.description != undefined? current.volumeInfo.description: "No Description", 
          image: current.volumeInfo.imageLinks.smallThumbnail, 
          cost: current.saleInfo.saleability == "NOT_FOR_SALE" || current.saleInfo.listPrice == undefined ? "Not for sale or available for free" : current.saleInfo.listPrice.amount ,
          buyLink: current.saleInfo.buyLink, 
          previewLink: current.volumeInfo.previewLink}
      })
      this.setState({...this.state, results})
    }
      
      )
  }
  render(){
    return <div className="App">
      <Header />
      <Form handleFormSubmit={this.handleFormSubmit} handleQuery={this.handleQuery} handlePrintFilter={this.handlePrintFilter} handleBookFilter={this.handleBookFilter}/>
      <ResultList results={this.state.results}/> 
      </div>
  }
}

export default App