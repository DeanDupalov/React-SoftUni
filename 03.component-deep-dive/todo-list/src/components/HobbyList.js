import { Component } from 'react';
import './HobbyList.css'
class HobbyLIst extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hobbies: [],
            selectedHobby: null,
        };
        this.onHobbyClick = this.onHobbyClick.bind(this)
    }


    componentDidMount() {
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    hobbies: Object.values(res),

                })
            })
    }

    onHobbyClick(e) {
        this.setState({ selectedHobby: e.target.textContent });
    }

    render() {

        return (
            <>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.state.hobbies.map(x =>
                            <li
                                className={x.name == this.state.selectedHobby ? 'selected-hobby' : ''}
                                onClick={this.onHobbyClick}
                                key={x._id}
                            >
                                {x.name}
                            </li>
                        )}
                </ul>
            </>
        )

    }
}

export default HobbyLIst;