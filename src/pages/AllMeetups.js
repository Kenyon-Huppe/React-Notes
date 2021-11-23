import MeetupList from "../components/meetups/MeetupList";

const INITIAL_DATA = [
    {
        id: 0,
        title: 'test'
    },
    {
        id: 1,
        title: 'another test'
    }
];

const AllMeetups = () => {
    return (
        <div>
            <h2>All Meetups</h2>
            <MeetupList meetups={INITIAL_DATA}></MeetupList>
        </div>
    )
}

export default AllMeetups
