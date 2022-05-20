import { useState } from "react";
import ClosePersonButton from '../closePersonButton/ClosePersonButton'

const AddPerson = ({ onSubmitAddPerson, onAddPerson }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitAddPerson(person)
    }

    const [person, setPerson] = useState({
        name: '',
        familyName: '',
        birthday: '',
        profileImage: 'avatar.jpg'
    });

    return (
        <div className="add-person">
            <form onSubmit={(e) => { onSubmit(e) }}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-control" type='text' name="name" placeholder="Enter Your First Name"
                            value={person.name}
                            onChange={(e) => { setPerson({ ...person, name: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Family</label>
                        <input className="form-control" type='text' name="familyName" placeholder="Enter Your Family Name"
                            value={person.familyName}
                            onChange={(e) => { setPerson({ ...person, familyName: e.target.value }) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Birthday</label>
                        <input className="form-control" type='text' name="birthday" placeholder="Enter Your Birthday"
                            value={person.birthday}
                            onChange={(e) => { setPerson({ ...person, birthday: e.target.value }) }} />
                </div>
                <div>
                    <input type="file" name="profileImage" 
                    onChange={(e)=>{setPerson({...person, profileImage: e.target.files[0]})}} />
                </div>
                <div className="add-person-actions">
                    <ClosePersonButton onClick={onAddPerson} />
                    <button className="btn-ordinary" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddPerson;