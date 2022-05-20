const ActionBar = ({ onSelectAll, selectAll, onDelete }) => {
    return (
        <div className='action-bar'>
            <div onClick={()=>{onDelete()}}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/icons/recycleBin.png`} 
                alt="recycle"/>
            </div>
            <div>
                <input type="checkbox" checked={selectAll} onChange={(e) => { onSelectAll(e) }} />
            </div>
        </div>
    );
}

export default ActionBar;