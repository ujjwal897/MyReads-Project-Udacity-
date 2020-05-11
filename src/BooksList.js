import React,{Component} from 'react'
import TypeOfBook from './TypeOfBook'

export default class BooksList extends Component{

  		render() {
        	return (
            	<ol className="books-grid">
                {!this.props.data.error ? this.props.data.map((item,key)=>{
  						return (
                          <li key={key}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{width:100, height:150, backgroundImage: `url(${item.imageLinks && item.imageLinks.thumbnail})`  }}></div>
							<TypeOfBook ChangeBook={this.props.ChangeBook} list={item}/>
                            </div>
                        	<div className="book-title">{item.title}</div>
								{item.authors ? item.authors.map((author,index)=>{
									return(
									    <div key={index} className="book-authors">{author}</div>
									  )
								}) : <div></div>
                               }
                            </div>
                          </li>
                        )          
            }) : <div>
                    <b>Sorry no results found for <span style={{color:"red"}}>{this.props.data.query}</span></b>
                 </div>
}                        </ol>
            )
        }
}