import { useEffect, useState } from "react"
import { setIsDirty } from "./redux/slice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { GlobalState } from "./redux/GlobalState"

export const EditPage = () => {
    const global = useAppSelector<GlobalState>((state) => state.global)
    const dispatch = useAppDispatch()
    const [text, setText] = useState('')

    useEffect(() => {
        dispatch(setIsDirty(text !== ''))
    }, [text])

    return (
        <div>
            <h2>edit page</h2>

            <p>input = <input type="text" value={text} onChange={e => setText(e.target.value)} /></p>

            <p>Change text then click back on browser</p>
        </div>
    )

}
