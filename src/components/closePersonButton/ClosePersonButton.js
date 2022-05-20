const ClosePersonButton = ({onClick}) => {
    return ( 
        <div className='close-person-button'>
            <i class="fa fa fa-times-circle" aria-hidden="true" onClick={onClick}
            ></i>
          </div>
     );
}
 
export default ClosePersonButton;