import React from 'react';



class MovieList extends React.Component {
    render() {
        console.log(this.props);
        return (

            <ul>
                <li>
            {this.props.data[0].title}
            </li>
            <li>
            {this.props.data[1].title}
            </li>
            <li>
            {this.props.data[2].title}
            </li>
            <li>
            {this.props.data[3].title}
            </li>
            <li>
            {this.props.data[4].title}
            </li>
            </ul>
        )
    }
}

export default MovieList;