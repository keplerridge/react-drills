import React, {Component} from 'react';

class List extends Component {
    
    constructor () {
        super();

        this.state = {
            names: ['Kepler', 'Danielle', 'Cory', 'Megan']
        }
    }

    render(){
        let displayNames = this.state.names.map((element, i) => {
            return <h2 key={i}>{element}</h2>
        })

        return (
            <section>
                {displayNames}
            </section>
        )
    }
}

export default List;