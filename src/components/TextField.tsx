import React from "react";

class TextField extends React.Component<{ columnSpan: string, label: any, name: any, autoComplete: any, required: any }> {
    render() {
        let {columnSpan, label, name, autoComplete, required} = this.props;
        return (
            <div className={columnSpan}>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name={name}
                        id={name}
                        autoComplete={autoComplete}
                        required={required}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
        )
    }
}

export default TextField;