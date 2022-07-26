import React from "react";
import { Img, ImgWrapper, Article } from "./syles";
// import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNearScreen } from "../../hooks/useNearScreen"
import { FavButton } from "../FavButton"
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation"
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, element] = useNearScreen()
    // const key = `like-${id}`
    // const [liked, setLiked] = useLocalStorage(key, false)

    return(
        <Article ref={element}>
            {
                show && <React.Fragment>
                            <Link to={`/detail/${id}`}>
                                <ImgWrapper>
                                    <Img src={src} />
                                </ImgWrapper>
                            </Link>
                            <ToggleLikeMutation>
                                {
                                    (toggleLike) => {
                                        const handleFavClick = () => {
                                            toggleLike({ variables: {
                                                input: { id }
                                            } })
                                            // setLiked(!liked)
                                        }
                                        return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                                    }
                                }
                            </ToggleLikeMutation>
                        </React.Fragment>
            }
        </Article>
    )
}

export { PhotoCard }