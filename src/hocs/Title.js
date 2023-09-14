import { useEffect } from "react";

export default function Title({component, title}) {

    useEffect(() => {
        document.title = title;
    }, [title])


    return component;
}