import React, { Component } from "react"

const Home = (Student) => {
    class Component extends React.Component {
        render() {
            return (
                <>
                    <h1><Student subject="js" /></h1>
                </>
            )
        }
    }
    return Component
}


export default Home