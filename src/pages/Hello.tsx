import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
    return (
        <div className="grid place-items-center h-screen">
            <span className="text-4xl text-center">
                <FontAwesomeIcon icon={faSmile} className="mr-2 text-yellow-400"/>Hello!
            </span>
        </div>
    )
}