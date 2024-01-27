import { useState } from "react";
import { useBlocker, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { GlobalState } from "./redux/GlobalState";

type Props = {
    child: JSX.Element
}

const MainLayout = (props: Props) => {
    const global = useAppSelector<GlobalState>((state) => state.global)
    const dispatch = useAppDispatch()    
    const loc = useLocation()
	
    const blocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            global.isDirty &&
            currentLocation.pathname !== nextLocation.pathname
    );

    return (
        <div style={{ margin: '1rem' }}>
            <h1>Layout</h1>

            <p>dirty = {String(global.isDirty)}<br /></p>            

            {blocker.state === "blocked" ? (
                <div style={{ padding: '1rem', border: '1px solid red' }}>
                    <p>Are you sure you want to leave?</p>
                    <button onClick={() => blocker.proceed?.()}>
                        Proceed
                    </button>
                    <button onClick={() => blocker.reset?.()}>
                        Cancel
                    </button>
                </div>
            ) : null}

            <p>blocker.state = {blocker.state}</p>

            {props.child}
        </div>
    )
}

export default MainLayout