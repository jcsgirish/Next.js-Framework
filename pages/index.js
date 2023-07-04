
import { MongoClient } from "mongodb";
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

function Homepage(props){
    return( 
        <MeetupList meetups= {props.meetups} />
    )
}
// export async function getStaticSideProps(context){
//     const req =context.req;
//     const res = context.res;

//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
    
//     };
// }
export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://thewizard:wizard0004@cluster0.ahkbhop.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
     const meetup=await meetupsCollection.find().toArray()
     client.close()
   

    return {
        props:{
            meetups:meetup.map(meetup=>({
            
                title:meetup.title,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate:1
    
    };
}


export default Homepage