const AddPersonButton = ({onAddPerson}) => {
    return ( 
        <div className='add-person-button'>
            <i className="fa fa-plus-circle" aria-hidden="true" onClick={onAddPerson}
            ></i>
          </div>
     );
}
 
export default AddPersonButton;