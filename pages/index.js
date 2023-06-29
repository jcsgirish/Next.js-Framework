
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
{
    id:'m1',
    title:'First meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg',
    address:'scotland',
    description:'This is first meetup'
},
{
    id:'m2',
    title:'second meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg',
    address:'scotland',
    description:'This is second meetup'
},
];

function Homepage(){
    return(
     
        <MeetupList meetups= {DUMMY_MEETUPS} />
     

    )
}

export default Homepage