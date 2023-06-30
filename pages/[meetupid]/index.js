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
export async function getStaticPaths (){
    return {

        fallback : false ,

        paths : [
            {
                params:{
                    meetupId:'m1',
                },
            },

        {
            params:{
                meetupId:'m2',
            },
        },

        ]
    }
}

export async function getStaticProps(context)
{

   const meetupId= context.params.meetupId;
   console.log(meetupId);

    return {
        props:{
            meetupData:{
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg',
                id: meetupId,
                title:'First Meetup',
                address:'scotland',
                description:'This is First meetup'

            },
        },
    }

    
}

export default MeetupDetail