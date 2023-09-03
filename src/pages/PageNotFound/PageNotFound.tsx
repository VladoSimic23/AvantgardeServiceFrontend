import globalStyles from "../../globalCss/globalStyle.module.css"

const PageNotFound = () => {
  return (
    <section>
        <div className={globalStyles.container}>
            <div className={globalStyles.pageNotFound}>
                <h1>Page Not Found...</h1>
            </div>
        </div>
    </section>
  )
}

export default PageNotFound