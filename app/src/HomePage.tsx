import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { GlobalState } from "./redux/GlobalState"
import { setIsDirty } from "./redux/slice"

const fnUrl = () => '/edit';

export const HomePage = () => {
    // const global = useAppSelector<GlobalState>((state) => state.global)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setIsDirty(false))
    }, [])

    return (
        <div>
            <h2>Home</h2>

            <button onClick={() => { navigate("/edit") }}>Go edit</button>
        </div>
    )
}