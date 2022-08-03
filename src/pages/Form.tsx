
import React from "react";

import {Link} from "react-router-dom";
import ImageHeader from "./../components/ImageHeader"

const Form = () => {

    const [hasFormSubmitted, setHasFormSubmitted] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const emailAddress = event.target[2].value
        const studentId = event.target[3].value
        const username = event.target[4].value

        const filledMediaConsent = event.target[6].checked || event.target[7].checked
        const hasMediaConsent = event.target[6].checked

        const dietaryRequirements = event.target[8].value
        let shirt = event.target[9].value

        console.log(event)

        if (firstName !== null && lastName !== null && emailAddress !== null && studentId !== null && username !== null && filledMediaConsent && shirt !== null) {
            if (firstName !== "" && lastName !== "" && emailAddress !== "" && studentId !== "" && username !== "" && shirt !== "") {

                let yesShirt = "Yes"
                if (shirt === "I don't want to get a free CompSoc t-shirt, thanks") {
                    yesShirt = "No"
                    shirt = ""
                }

                let yesMediaConsent = "Yes"
                if (!hasMediaConsent) {
                    yesMediaConsent = "No"
                }

                const Airtable = require('airtable');
                const base = new Airtable({apiKey: "Your Airtable key"}).base("Your base key");

                base('Membership 2022').create([
                    {
                        "fields": {
                            "Email": emailAddress,
                            "First name": firstName,
                            "Last name": lastName,
                            "Student ID": parseInt(studentId),
                            "UC username": username,
                            "T-shirts": yesShirt,
                            "Media consent": yesMediaConsent,
                            "Has collected t-shirt?": "Not yet",
                            "Size": shirt,
                            "Other requirements": dietaryRequirements
                        }
                    },
                ], function(err: any, records: { getId: () => any; }[]) {
                    if (err) {
                        console.error(err);
                        setErrorMessage("An internal error has occurred. Please try again later.")
                        setHasFormSubmitted(true)
                        return;
                    }
                    records.forEach(function (record: { getId: () => any; }) {
                        console.log(record.getId());
                        setErrorMessage("")
                        setHasFormSubmitted(true)
                    });
                });
            }
        }
    }


    return (
        <div>
            <ImageHeader/>

            <div className={"flex mt-8 my-32 justify-center mx-1"}>
                <form className="space-y-5 lg:w-1/2 xl:w-1/3" onSubmit={handleSubmit}>

                    <div className="space-y-12 bg-white">
                        <div className={"space-y-2"}>
                            <p className={"text-3xl font-bold mb-4"}>CompSoc</p>
                            <p className={"text-xl font-medium"}>2022 Membership Registration</p>
                            <p className={"text-sm font whitespace-normal break-words"}>If you've got any questions, please reach out at <Link to="" onClick={(e: any) => {window.location.href = "mailto:info@compsoc.org.nz"}} className={"text-blue-600"}>info@compsoc.org.nz</Link>.</p>
                        </div>

                        {!hasFormSubmitted &&
                            <>
                                <div className={"space-y-8"}>

                                    <div className={"bg-orange-50 p-4 border-gray-300 rounded-md"}>
                                        <div className={"whitespace-normal"}>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">5 August changes</h3>
                                            <p className={"text-md text-gray-700"}>In late 2022, CompSoc will be rolling out a number of web tools, including Course Reviews and CSSE Job Board.</p>
                                            <p className={"text-md text-gray-700 mt-1"}>After 5 August, we will roll out a new registration system with UC Okta integration to support these applications.</p>
                                            <p className={"text-md text-gray-700 mt-1"}>For now, you can still sign up normally using the form below!</p>
                                        </div>
                                    </div>

                                    <div className={"whitespace-normal"}>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">Personal information</h3>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Student ID (e.g. 48650333)
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="student-id"
                                                    id="student-id"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label className="block text-sm font-medium text-gray-700">
                                                UC username (e.g. exa45)
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900  mt-5">Media consent</h3>

                                    </div>
                                    <div className="mt-6">
                                        <fieldset className="mt-6">
                                            <div>
                                                <legend className="text-base font-medium text-gray-900">Do you consent for your photos to appear on CompSoc's social media?</legend>
                                                <p className="text-sm text-gray-500">Feel free to say yes or no.</p>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="yes-media"
                                                        name="media"
                                                        type="radio"
                                                        required
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="yes-media" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="no-media"
                                                        name="media"
                                                        type="radio"
                                                        required
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="no-media" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900  mt-5">Dietary requirements</h3>

                                    </div>

                                    <div className="mt-6">
                                        <div>
                                            <label htmlFor="text-diet" className="block text-sm font-medium text-gray-700">
                                                Have you got any dietary requirements that we should be aware of?
                                            </label>
                                            <div className="mt-1">
                                        <textarea
                                            id="text-diet"
                                            name="text-diet"
                                            placeholder={"Leave blank for none"}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"

                                        />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 mt-5">Your free 2022 CompSoc t-shirt</h3>
                                    </div>
                                    <div className={"grid grid-cols-1 sm:grid-cols-6 mt-6"}>
                                        <div className="col-span-4">
                                            <label htmlFor="t-shirt" className="block text-sm font-medium text-gray-700">
                                                What is your t-shirt size?
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="t-shirt"
                                                    name="t-shirt"
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option></option>
                                                    <option>I don't want to get a free CompSoc t-shirt, thanks</option>
                                                    <option>XS</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                    <option>XXL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="space-y-8">
                                    <div>
                                        <p className={"text-sm text-gray-700 font-medium"}>By submitting your registration, you agree to CompSoc's <a className={"text-blue-600"} href={"https://compsoc.org.nz/privacy/"}>Privacy Policy.</a></p>
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Submit my membership registration
                                        </button>
                                    </div>

                                </div>
                            </>
                        }

                        {hasFormSubmitted &&
                            <>
                                {errorMessage === "" ?
                                    <div className={"space-y-3 bg-orange-100 p-4 rounded-lg"}>
                                        <h1 className={"text-xl font-medium"}>Thank you so much for joining CompSoc!</h1>
                                        <p className={"text-sm"}>Your registration has been recorded, and you're the newest CompSoc member.</p>
                                        <p className={"text-sm"}>Don't forget to join our <Link to={""} onClick={(e: any) => {window.location.href = "https://www.facebook.com/groups/uccompsoc"}} className={"text-blue-600"}>Facebook Group</Link>, and we look forward to seeing you soon.</p>
                                    </div> :
                                    <div className={"space-y-3 bg-orange-100 p-4 rounded-lg"}>
                                        <h1 className={"text-xl font-medium"}>There has been an internal server...</h1>
                                        <p className={"text-sm"}>We're sorry that your registration was not successful.</p>
                                        <p className={"text-sm"}>Please contact us at info@compsoc.org.nz for help.</p>
                                    </div>
                                }
                            </>
                        }

                        <div className={"pt-8"}>
                            <p className={"text-sm text-gray-700"}>2022 (c) University of Canterbury Computer Society. All rights reserved.</p>
                        </div>

                    </div>


                </form>
            </div>

        </div>

    )
}

export default Form;