//recoger el hooj personalizado de useLike
import useLike from "./hooks/useLike";

const Like = () => {
    //recoger el hook personalizado
    const { like, toggleLike } = useLike();
    return (
        <div>
            <button onClick={toggleLike}>{like ? "❤️" : "♡"}</button>
        </div>
    );
};

export default Like;