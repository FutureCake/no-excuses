import React from "react";

export interface URLMatchesProps {
    matches: string[];
}

export default function URLMatches(props: URLMatchesProps) {

    return (
        <div>
            {props.matches.map((match, index) => (
                <div key={index}>
                    {match}
                </div>
            ))}
        </div>
    )
}