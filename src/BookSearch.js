import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BooksList from './BooksList'

export default class BookSearch extends Component{
  
  componentWillUnmount(){
          this.props.clear();
  }
  
		render() {
        	return(
               <div className="search-books">
              		<div className="search-books-bar">
              		  <Link className="close-search" to="/">Close</Link>
              		  <div className="search-books-input-wrapper">
                  <input type="text" onChange={this.props.handleSearchChange} placeholder="Search by title or author"/>
               </div></div>
					<div className="search-books-results">
					<ol className="books-grid">
							<BooksList ChangeBook={this.props.ChangeBook} data={this.props.searchData}/>
							</ol>
						</div>
					</div>
            )
        }
}