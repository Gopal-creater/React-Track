import React from 'react'
import cross from '../../static/close.svg';

const ModalView:React.FC=(props)=>{
    return (
        <div style={{ backgroundColor: "red" }}>

            <header className="create-modal-header" style={{display:"flex", padding:'20px',justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}}>
                <h2 style={{fontSize:'2vw'}}>Modal Header</h2>
                <img src={cross} alt="cross create" ></img>
            </header>

            <div className="create-modal-container">
                <p>Some text..</p>
                <p>Some text..</p>
            </div>

            <footer className="create-modal-footer" style={{display:"flex",justifyContent:"flex-end",padding:'10px', backgroundColor:"white"}}>
                <button style={{marginRight:'5px',border:'1px solid blue', padding:'10px'}}>Cancel</button>
                <button style={{backgroundColor:'#4D5AFF', color:'white', border:'none',padding:'10px'}}>Submit</button>
            </footer>
        </div>
    )
}

export default ModalView;


