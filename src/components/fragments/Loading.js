import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
    return (
        <div style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            width:'100%',
            flex:1,
            top:0,
            position:'fixed',
            height:'100%'
        }}>
            <CircularProgress color="white"/>
        </div>
    )
}

export default Loading
