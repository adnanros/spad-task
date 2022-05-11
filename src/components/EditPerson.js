import { useState } from "react";
import ClosePersonButton from './ClosePersonButton'

const EditPerson = ({ onSubmitEditPerson, onEditPerson, personToBeUpdated }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitEditPerson(person)
    }

    const [person, setPerson] = useState(personToBeUpdated);
    return (
        <div style={{ 'padding': '10px' , 'border': '1px solid #ccc', 'marginBottom': '3px' }}>
            <form onSubmit={(e) => { onSubmit(e) }}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="name" placeholder="Enter Your First Name"
                            value={person.name}
                            onChange={(e) => { setPerson({ ...person, name: e.target.value }) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Family</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="familyName" placeholder="Enter Your Family Name"
                            value={person.familyName}
                            onChange={(e) => { setPerson({ ...person, familyName: e.target.value }) }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Birthday</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' name="birthday" placeholder="Enter Your Birthday"
                            value={person.birthday}
                            onChange={(e) => { setPerson({ ...person, birthday: e.target.value }) }} />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <ClosePersonButton onClick={()=>{onEditPerson(person)}} />
                    <button className="btn btn-sm" type="submit" style={{ 'backgroundColor': '#57EFDD', }}>Save</button>
                </div>
            </form>
        </div>
    );
}

export default EditPerson;