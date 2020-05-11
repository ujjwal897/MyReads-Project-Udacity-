import React, {Component} from 'react'

export default class TypeOfBook extends Component{
           Change = (e)=>{
           this.props.ChangeBook(this.props.list,e.target.value)
           }

            typee = (type)=>{
            if(type)
              return type
             return "None"
            }

              render() {
              return(
                   <div className="book-shelf-changer">
                    <select value={this.typee(this.props.list.shelf)} onChange={this.Change}>
					   <option value="move" disabled>Move to...</option>
                       <option value="currentlyReading">Currently Reading</option>
                       <option value="wantToRead">Want To Read</option>
                       <option value="read">Read</option>
                       <option value="none">None</option>
                    </select>
                   </div>
                )
              }
}