import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// This component is getting turned into a container through connect. The action creator is being bound through
// bindActionCreators from redux

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// Anything returned will end up as props on booklist container
function mapDispatchToProps(dispatch) {
    // Whenever select book is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of booklist
    // Books reducer is returning array of books
    return {
        books: state.books
    }
}

//Connect takes a function and a component and produces a container which is able to communicate with our central data store
export default connect(mapStateToProps, mapDispatchToProps) (BookList);


// What is flux? Babel.io