import React from "react";

class Button extends React.Component<{ type: any, text: any }> {
    render() {
        let {type, text} = this.props;
        return (
            <button
                type={type}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {text}
            </button>
        )
    }
}

export default Button;