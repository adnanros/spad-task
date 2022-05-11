const AddPersonButton = ({onAddPerson}) => {
    return ( 
        <div className='d-flex justify-content-end' style={{'cursor': 'pointer', 'paddingRight': '10px', 'marginBottom': '3px'}}>
            <i class="fa fa-plus-circle" aria-hidden="true" onClick={onAddPerson}
            style={{ 'color': '#57EFDD', 'fontSize': '32px' }}></i>
          </div>
     );
}
 
export default AddPersonButton;