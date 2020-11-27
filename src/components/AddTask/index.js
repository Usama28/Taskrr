import React ,{useState} from 'react'
import { Button ,Modal,Form} from 'react-bootstrap';
import { Card,Icon,Input} from 'semantic-ui-react'


function AddTasks() {

    const [show, setShow] = useState(false);
    const [title,setTitle]=useState('')
    const [focus,setFocus]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const getFocus=function(){
//     document.getElementById('input').focus()
//   }

  return (
    <div className='head'>

      <Button variant="success" onClick={handleShow}>
       + Add a new Coloumn
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Coloumn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
             <Form.Control type="text" placeholder="Title..." onChange={(e)=>setTitle(e.target.value)} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        
        <Card.Content>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div className='fields'>
                
                        <input value={title} 
                        id='input'
                        style={{ border: 0  }}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
               
            </div>   
            <div>
                <a onClick={()=>document.getElementById('input').focus()}><Icon name='edit'/></a>
                <a><Icon name='trash'/></a>
            </div>
        </div>
        <Card.Description style={{height:'200px'}}>
            
        </Card.Description>
        </Card.Content>
    
    </Card>
    </div>
  );
}

export default AddTasks;
