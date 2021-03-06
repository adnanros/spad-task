import PersonDetail from '../personDetail/PersonDetail';

const Person = ({ person, onCheck, onSelect, onEditPerson }) => {
    return (
        <div className='person-card' data-testid={`person-div-${person.id}`}>

            <div className='person-card-image'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${person.profileImage}`} alt='...' />
            </div>
            <div className='person-card-body'>
                <div className='person-actions-top'>
                    <div className='mx-2' style={{ 'cursor': 'pointer' }}>
                        <i className="fa fa-pencil" aria-hidden="true" style={{ 'fontSize': '16px', 'color': '#333' }}
                            onClick={() => { onEditPerson(person) }} 
                            data-testid={`edit-icon-${person.id}`}></i>
                    </div>
                    <div>
                        <input type='checkbox' checked={person.selected}
                            onChange={() => { onSelect(person.id) }} data-testid={`person-checkbox-${person.id}`} 
                        />
                    </div>
                </div>

                <PersonDetail person={person} />

                <div className='person-actions-bottom'>
                    <div>
                        <i className="fa fa-tag" aria-hidden="true"
                            style={{ 'color': person.confirmed ? 'green' : 'red', 'fontSize': '20px' }}
                        data-testid={`confirm-tag-${person.id}`}></i>
                    </div>
                    {!person.confirmed &&
                        <div>
                            <button className='btn-ordinary' onClick={() => { onCheck(person) }}
                            data-testid ={`check-button-${person.id}`}>Check</button>
                        </div>}
                </div>
            </div>

        </div>
    );
}

export default Person;