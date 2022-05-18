const PersonDetail = ({ person }) => {
    return (
        <div className="person-details">
            <div className='person-detail-row'>
                <div className=''>
                    Name:
                </div>
                <div className=''>
                    {person.name}
                </div>
            </div>
            <div className='person-detail-row'>
                <div className=''>
                    Family:
                </div>
                <div className=''>
                    {person.familyName}
                </div>
            </div>
            <div className='person-detail-row'>
                <div className=''>
                    BirthDay:
                </div>
                <div className=''>
                    {person.birthDate}
                </div>
            </div>
        </div>
    );
}

export default PersonDetail;