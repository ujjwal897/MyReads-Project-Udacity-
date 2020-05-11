import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

export default class HomePage extends Component {

 	render(){
      const shelves = {
      currentlyReading: ['Currently Reading','currentlyReading'],
      wantToRead: ['Want To Read','wantToRead'],
      read: ['Read','read']
      }
      return (
        <div className="list-books">
        	<div className="list-books-title">
        	   <h1>My Reads</h1>
        	</div>
        	<div className="list-books-content">
        	  <div>
                  {Object.keys(shelves).map((key,indx)=>{
        		return(
                  <BookShelf key={indx} type={shelves[key][0]} ChangeBook={this.props.ChangeBook} data={this.props.data.filter(data=>data.shelf===shelves[key][1])}/>
					)})}
				</div>
			</div>
			<div className="open-search">
			    <Link to="/BookSearch">Add a Book</Link>
			</div></div>
        )
    }
}  