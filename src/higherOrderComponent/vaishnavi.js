import React from "react"
import Home from "./home"
class Vaishnavi extends React.Component {
    state = {
        mark: 0
    }
    changeMakrs = () => {
        return this.setState({ mark: this.state.mark + 10 })
    }
    render() {
        return (
            <>
                <h1 onMouseOver={this.changeMakrs}>Vaishnavi markers:{this.state.mark},{this.props.subject}</h1>

            </>
        )
    }
}

export default Home(Vaishnavi)