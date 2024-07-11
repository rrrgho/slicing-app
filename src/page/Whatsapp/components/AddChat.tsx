import { faCameraAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddChat = () => {
    return (
        <div className="rounded-full backdrop-blur bg-primary w-[35px] h-[35px] flex justify-center content-center items-center">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
        </div>
    )
}

export default AddChat;