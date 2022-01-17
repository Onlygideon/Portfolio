import classes from './PageHeader.module.css'

const PageHeader = (props) => {
    return ( 
        <div className={classes.container}>
            <hr />
            <h1>{props.title}</h1>
        </div>
     );
}
 
export default PageHeader;