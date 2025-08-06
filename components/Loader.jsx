import { Infinity } from 'ldrs/react'
import 'ldrs/react/Infinity.css'




export default function Loader() {


    return (
        <div className="loading">
            <Infinity
                size="55"
                stroke="4"
                strokeLength="0.15"
                bgOpacity="0.1"
                speed="1.3"
                color="white"
            />
        </div>
    )
}