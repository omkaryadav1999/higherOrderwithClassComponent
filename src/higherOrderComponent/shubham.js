import React from "react"
import Home from "./home"
class Shubham extends React.Component {
    state = {
        mark: 0
    }
    changeMakrs = () => {
        return this.setState({ mark: this.state.mark +5 })
    }
    render() {
        return (
            <>
                <h1 onMouseOver={this.changeMakrs}>Shubham markers:{this.state.mark},{this.props.subject}</h1>

            </>
        )
    }
}

export default Home(Shubham)