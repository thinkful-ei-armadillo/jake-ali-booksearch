import React, {Component} from 'react';
import App from './App';

class SearchFilter extends Component {

    render() {
    return (
            <div>
                <form>
                    <label className='filter'>Book Type:</label>
                    <select
                    id='bookType'
                    name='bookType' onChange={(e) => this.props.handleFilter(e.target.value)}>
                    <option value=''>All</option>
                    <option value='filter=full'>Full Books</option>
                    <option value='filter=partial'>Partial Books</option>
                    <option value='filter=ebooks'>E-books</option>
                    <option value='filter=free-ebooks'>Free E-books</option>
                    
                    </select>
                    <label className='filter'>Print Type:</label>
                    <select
                    id='printType'
                    name='printType' onChange={(e) => this.props.handleFilter(e.target.value)}>
                    <option value="printType=all">All Books</option>
                    <option value="printType=magazines">Magazines</option>
                    <option value="printType=books">Hardcover Books</option>
                    </select>
                </form>
            </div>
        )
    

  }
}


export default SearchFilter;