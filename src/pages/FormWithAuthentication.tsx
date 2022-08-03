
import React from "react";

import {Link} from "react-router-dom";
import ImageHeader from "../components/ImageHeader"
import TextField from "../components/TextField";
import Button from "../components/Button";
import axios from "axios";

const FormWithAuthentication = () => {

    const [success, setSuccess] = React.useState(true)

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const username = event.target[0].value
        const password = event.target[1].value

        if (username !== null && password !== null && username !== "" && password !== "") {
            axios.post('https://uc.okta.com/api/v1/authn', {
                "username": username,
                "password": password,
                "options": {
                    "multiOptionalFactorEnroll": true,
                    "warnBeforePasswordExpired": true
                }
            }).then(response => {
                if (response.status === 200) {
                    setSuccess(true)
                    const data = JSON.parse(response.data)
                    document.cookie="login=" + data._embedded.user.profile.login
                    document.cookie="firstName=" + data._embedded.user.profile.firstName
                    document.cookie="lastName" + data._embedded.user.profile.lastName
                    console.log(success)
                } else {
                    setSuccess(false)
                }
            })
        }
    }


    return (
        <div>
            <ImageHeader/>

            <div className={"flex mt-8 my-10 justify-center"}>


                <form className="space-y-9 w-5/6 md:w-4/6 lg:w-2/3 xl:w-1/3" onSubmit={handleSubmit}>

                    <div className={""}>
                        <p className={"text-3xl font-bold"}>CompSoc</p>
                        <p className={"text-xl font-medium"}>2022 Membership Registration</p>
                      </div>

                    <div className="space-y-12">


                        <div className={"bg-orange-50 p-4 border-gray-300 rounded-md"}>
                            <div className={"whitespace-normal"}>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Authenticate with your UC account</h3>
                                <p className={"text-md text-gray-700"}>To register your membership, we need to first verify you're a student or staff member. Please enter the same login credentials as your UC Learn account.</p>
                                <p className={"text-md text-gray-700 mt-1"}>We are rolling out these changes.</p>
                                <p className={"text-md text-gray-700 mt-1"}>We will authenticate your account using UC's Okta API. CompSoc does not store your password.</p>
                                <p className={"text-md text-gray-700 mt-1"}>If you are unable to authenticate, please click here to complete a manual form.</p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <TextField columnSpan="sm:col-span-4" label="UC username" name="username" autoComplete="" required={true}/>

                                <TextField columnSpan={"sm:col-span-4"} label={"Password"} name={"password"} autoComplete={""} required={true}/>

                                <div className={"sm:col-span-3"}>
                                    <Button type={"submit"} text={"Authenticate with UC"}/>
                                </div>

                            </div>
                        </div>

                        <div className={"pt-4"}>
                            <p className={"text-sm text-gray-700"}>2022 (c) University of Canterbury Computer Society. All rights reserved.</p>
                        </div>

                    </div>


                </form>
            </div>

        </div>

    )
}

export default FormWithAuthentication;