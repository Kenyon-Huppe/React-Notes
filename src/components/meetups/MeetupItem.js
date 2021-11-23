import classes from './MeetupItem.module.css'

const MeetupItem = ({ }) => {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.info}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={classes.btn}>
                <button>To Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem
