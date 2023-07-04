
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetuppage(){

    const Router  =useRouter();

    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup.js',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'

            }
        });
        const data = await response.json();

        console.log(data);

        Router.push('/')
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>



}

export default NewMeetuppage