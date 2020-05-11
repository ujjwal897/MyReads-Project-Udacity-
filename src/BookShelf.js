import React, {Component} from 'react'
import BooksList from './BooksList'

export default class BookShelf extends Component{
		render(){
        return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.type}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
		     <BooksList ChangeBook={this.props.ChangeBook}  data={this.props.data}/>
				</ol>
			   </div>
              </div>
         )
        }
}  