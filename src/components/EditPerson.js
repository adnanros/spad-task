import { useState } from "react";
import ClosePersonButton from './ClosePersonButton'

const EditPerson = ({ onSubmitEditPerson, onEditPerson, personToBeUpdated }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitEditPerson(person)
    }

    const [person, setPerson] = useState(personToBeUpdated);
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
                <div className="add-person-actions">
                    <ClosePersonButton onClick={() => { onEditPerson(person) }} />
                    <button className="btn-ordinary" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default EditPerson;