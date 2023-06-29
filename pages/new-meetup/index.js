//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetuppage(){

    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>



}

export default NewMeetuppage