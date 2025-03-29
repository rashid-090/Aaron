import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateError } from '../../redux/reducers/userSlice';
import { AaronLogo } from '../../assets';
import { FaEye } from 'react-icons/fa';
import { IoEyeOffSharp } from "react-icons/io5";
import { loginUser } from '../../redux/actions/userActions';
import ClipLoader from "react-spinners/ClipLoader";




const Login = () => {
    const { user, loading, error } = useSelector((state) => state.user);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Email is not valid")
            .required("Please enter the email."),
        password: yup
            .string()
            .min(4, "Password must be at least 4 characters.")

            .required("Please enter the password."),
    });

    useEffect(() => {
        
        if (user) {
            navigate("/");
        }
        return () => {
            dispatch(updateError(""));
        };
    }, [user]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setIsButtonLoading(true)
        const result = await dispatch(loginUser(data));

        // If login is successful, navigate to "/"
        // if (loginUser.fulfilled.match(result)) {
        //     navigate("/");
        //     dispatch(getUserDataFirst());
        // } else {
        //     console.error("Login failed", result.payload || "Unknown error");
        // }
        setIsButtonLoading(false)
    }
    return (
        <section className="w-11/12 xl:w-10/12  mx-auto h-screen flex flex-col justify-center items-center py-10">
            <div className="bg-white text-black text-center w-[95%] md:w-[380px] shadow-2xl rounded-2xl pb-5">
                <div className=" p-3 grid place-items-center rounded-2xl -mt-5 w-[90%] mx-auto shadow-xl">
                    <Link to="/">
                        <img className="h-14 object-cover" src={AaronLogo} alt="Logo" />
                    </Link>
                </div>

                <form
                    className="pt-10 p-5 flex flex-col gap-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <input
                            className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <p className="w-full h-5 text-sm text-left py-2 text-red-600">
                            {errors.email?.message}
                        </p>
                    </div>
                    <div className="relative ">
                        <input
                            className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            {...register("password")}
                        />

                        <button
                            type="button"
                            className="absolute right-3 top-[50%] -translate-y-[50%] text-gray-500"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? <IoEyeOffSharp /> : <FaEye />}
                        </button>
                    </div>{
                        errors.password?.message &&

                        <p className="w-full h-5 text-left  text-sm text-red-600">
                            {errors.password?.message}
                        </p>
                    }
                    <button
                        type="submit"
                        disabled={isButtonLoading}
                        className={`bg-main bg-mainbtn hover:bg-mainbtnhrv duration-200 p-2 rounded-md text-black uppercase font-semibold mt-2 hover:cursor-pointer ${isButtonLoading && "cursor-default"
                            }`}
                    >
                        {isButtonLoading ? <ClipLoader size={20} /> : "Login"}
                    </button>
                    {error && <p className="my-2 text-red-400">{error}</p>}

                    <p
                        className=" text-sm   hover:underline hover:cursor-pointer"
                        onClick={() => navigate("/forgot-password")}
                    >
                        Forgot password?
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Login
