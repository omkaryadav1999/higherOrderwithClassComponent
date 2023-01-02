import React from "react"
import Home from "./home"
class Omkar extends React.Component {
    state = {
        mark: 0
    }
    changeMakrs = () => {
        return this.setState({ mark: this.state.mark + 1 })
    }
    render() {
        return (
            <>
                <h1 onMouseOver={this.changeMakrs}>omkar markers:{this.state.mark},{this.props.subject}</h1>

            </>
        )
    }
}

export default Home(Omkar)