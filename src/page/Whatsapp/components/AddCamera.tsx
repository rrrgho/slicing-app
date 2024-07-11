import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCamera = () => {
    return (
        <div className="rounded-full backdrop-blur bg-white/20 w-[30px] h-[30px] flex justify-center content-center items-center">
            <FontAwesomeIcon icon={faCameraAlt} className="text-white" />
        </div>
    )
}

export default AddCamera;