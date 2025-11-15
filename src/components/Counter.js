import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    };

    decrement = () => {
        this.setState(prev => ({ count: prev.count - 1 }));
    };

    render() {
        const { count } = this.state;

        return (
            <div
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h1>Counter App</h1>
                <h2>Count: {count}</h2>

                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={this.increment}
                        style={{
                            margin: "5px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Increment
                    </button>

                    <button
                        onClick={this.decrement}
                        style={{
                            margin: "5px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                        }}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
