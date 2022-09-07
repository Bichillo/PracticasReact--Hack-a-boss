//crear hook personalizado para manejar el like
import { useState } from "react";

const useLike = () => {
    const [like, setLike] = useState(false);
    return {
        like: like,
        toggleLike: () => setLike(!like),
    };
    };

export default useLike;