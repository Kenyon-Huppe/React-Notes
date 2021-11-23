import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList = ({ meetups }) => {
    return (
        <ul className={classes.list}>
            {meetups.map((element) => {
                <MeetupItem
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    address={address}
                />
            })}
        </ul>
    )
}

export default MeetupList
