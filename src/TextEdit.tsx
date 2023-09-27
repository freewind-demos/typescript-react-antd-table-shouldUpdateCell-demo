import React, {FC, useEffect, useState} from "react";

type Props = {
    value: string | undefined,
    onChange: (value: string | undefined) => void
}

export const TextEdit: FC<Props> = ({value, onChange}) => {
    const [innerValue, setInnerValue] = useState<string>();
    useEffect(() => {
        setInnerValue(value)
    }, [value])

    return <input value={innerValue} onChange={(event) => setInnerValue(event.target.value)}/>
}
