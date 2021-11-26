import {Skeleton} from "@mui/material";

const PostLoading = () => {
    return (
        <div style={{
            width: "80%",
            margin: "0 auto",
            marginTop: "22px"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "22px"
            }}>
                <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                <Skeleton animation="wave" height={10} width="40%"/>
            </div>
            <div style={{
                marginTop: "22px"
            }}>
                <Skeleton sx={{height: 190}} animation="wave" variant="rectangular"/>
            </div>
            <div style={{
                marginTop: "22px"
            }}>
                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={10} width="80%"/>
            </div>
        </div>
    )
}

const FeedLoading = () => {
    return (
        <>
            <PostLoading/>
            <PostLoading/>
            <PostLoading/>
        </>
    )
}


export default FeedLoading