import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Clue from './Clue'

export class Category extends Component {
    state = {
        clues: []
    }

    componentDidMount(){
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => this.setState({ clues: json}))
    }
    render() {
        return(
           <div>
            <h2> {this.props.category.title} </h2>
            {
                this.state.clues.map(clue => {
                    return (
                        <Clue key={clue.id}
                            clue={clue}
                        />
                    )
                })
            }
        </div> 
        )
    }
}

export class LinkedCategory extends Component {
    render() {
        return (
            <div>
                 <Link className="link-home" to='/'><h4>Home</h4></Link>
                 <Category category={this.props.category}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        category: state.category
    }
}
export default connect(mapStateToProps)(LinkedCategory)