import { Fragment } from "react"
import MeetupDetails from "../../components/meetups/MeetupDetails"


function MeetupDetail(){
    return (
        <MeetupDetails 
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg'
        title='First Meetup'
        address='scotland'
        description='This is First meetup'
        ></MeetupDetails>
      
    )
}

export default MeetupDetail