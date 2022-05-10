import { useState } from "react";

const AddPerson = ({onSubmitAddPerson}) => {
    const onSubmit = (e)=>{
        e.preventDefault();
        onSubmitAddPerson(person)
    }
    
    const [person, setPerson] = useState({
        name: '',
        familyName: '',
        birthday: ''
    });
    return ( 
        <div style={{'padding': '5px'}}>
            <form onSubmit={(e)=>{onSubmit(e)}}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="name" placeholder="Enter Your First Name"
                        value={person.name}
                        onChange={(e)=>{setPerson({...person, name: e.target.value})}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Family</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="familyName" placeholder="Enter Your Family Name"
                        value={person.familyName}
                        onChange={(e)=>{setPerson({...person, familyName: e.target.value})}}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Birthday</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="birthday" placeholder="Enter Your Birthday"
                        value={person.birthday}
                        onChange={(e)=>{setPerson({...person, birthday: e.target.value})}}/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Save</button>
            </form>
        </div>
     );
}
 
export default AddPerson;