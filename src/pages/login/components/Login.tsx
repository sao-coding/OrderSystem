import { useState, useEffect } from "react"
import { IconUserCircle, IconLock, IconExclamationCircle } from "@tabler/icons-react"
import clsx from "clsx"

const Login = ({ status }: { status: (status: string) => void }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    useEffect(() => {
        if (username.length > 0) {
            setErrorUsername(false)
        } else {
            setErrorUsername(true)
        }
    }, [username])

    useEffect(() => {
        if (password.length > 0) {
            setErrorPassword(false)
        } else {
            setErrorPassword(true)
        }
    }, [password])

    useEffect(() => {
        setErrorUsername(false)
        setErrorPassword(false)
    }, [])

    const login = () => {
        if (username.length > 0 && password.length > 0) {
            console.log("login")
        } else {
            if (username.length === 0) {
                setErrorUsername(true)
            }
            if (password.length === 0) {
                setErrorPassword(true)
            }
        }
    }

    return (
        <>
            <div className='m-2 flex flex-col items-center justify-center rounded-lg bg-white p-2 shadow'>
                <div className='p-2 text-xl font-semibold'>歡迎使用！線上點餐系統</div>
                <div className='p-2'>請選擇登入/註冊方式，註冊後即可使用</div>
                <div className=''>
                    <button
                        className='rounded-lg bg-red-300 px-4 py-1'
                        onClick={() => {
                            status("register")
                        }}
                    >
                        註冊
                    </button>
                </div>
            </div>
            <div className='rounded-xl bg-slate-300 p-4 shadow max-md:min-w-full max-md:bg-transparent max-md:shadow-none'>
                <div className='m-4'>
                    <div
                        className={clsx(
                            "flex items-center rounded-full border border-gray-400 bg-white p-1 text-xl hover:border-gray-600",
                            errorUsername
                                ? "border-2 border-red-500"
                                : "border-gray-400 hover:border-gray-600"
                        )}
                    >
                        <IconUserCircle className='px-2' size={40} />
                        <input
                            type='text'
                            className='box-border w-full rounded-r-full p-1 focus-visible:outline-none'
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                            placeholder='使用者名稱'
                        />
                        <IconExclamationCircle
                            className={clsx("text-red-500", errorUsername ? "" : "hidden")}
                            size={40}
                            stroke={2}
                        />
                    </div>
                    {errorUsername && (
                        <div className='text-right text-sm text-red-500'>請輸入正確的帳號</div>
                    )}
                </div>
                <div className='m-4'>
                    <div
                        className={clsx(
                            "flex items-center rounded-full border border-gray-400 bg-white p-1 text-xl",
                            errorPassword ? "border-2 border-red-500" : "border-gray-400"
                        )}
                    >
                        <IconLock className='px-2' size={40} />
                        <input
                            type='text'
                            className='box-border w-full rounded-r-full p-1 focus-visible:outline-none'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder='使用者密碼'
                        />
                        <IconExclamationCircle
                            className={clsx("text-red-500", errorPassword ? "" : "hidden")}
                            size={40}
                            stroke={2}
                        />
                    </div>
                    {errorPassword && (
                        <div className='text-right text-sm text-red-500'>請輸入正確的密碼</div>
                    )}
                </div>
                <div className='m-4'>
                    <button
                        type='submit'
                        className='w-full rounded-lg bg-amber-400 p-2'
                        onClick={login}
                    >
                        登入
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login
