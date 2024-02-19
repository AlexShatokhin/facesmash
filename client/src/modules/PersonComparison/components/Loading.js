import SkeletonComponent from "../UI/Skeleton"

const LoadingView = () => {
    return (
        <>
            <SkeletonComponent style = {{marginRight: 10, marginTop: -10, marginLeft: -5}}/>
            <SkeletonComponent style = {{marginRight: 10, marginTop: -10, marginLeft: -5}} />
        </>
    )
}

export default LoadingView;