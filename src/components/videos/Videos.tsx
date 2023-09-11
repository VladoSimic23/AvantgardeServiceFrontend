import styles from "../../globalCss/globalStyle.module.css"

const Videos = ({videos}: any) => {

  return (
    <div className={styles.video}>
        {videos && videos.map((vid:any,index: number) => {
            return <div key={index}>
                        <iframe
                        width="100%"
                        height="600"
                        src={vid}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                        ></iframe>
                    </div>
         })}
    </div>
  )
}

export default Videos