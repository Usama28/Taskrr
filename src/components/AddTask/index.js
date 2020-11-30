import React ,{useState} from 'react'
import { Button ,Modal,Form} from 'react-bootstrap';
import { Card,Icon,Grid} from 'semantic-ui-react'
import AddTask from '../RenderTask'


function AddTasks() {

    const [show, setShow] = useState(false);
    const [title,setTitle]=useState('')
    const [list ,setList]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTask=function(){
    const tempArray=[...list]
    tempArray.push(<AddTask title={title} />)
    setList(tempArray)
    setShow(false)
  }
  return (
    <div className='head'>

      <Button variant="warning" onClick={handleShow}>
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
          <Button variant="danger" onClick={addTask} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Grid >
        <Grid.Row columns={3}>
          {
            list && list.map(item=>{
              return<Grid.Column style={{marginTop:'3%'}}>
                {item}
              </Grid.Column>
    
            })
          }
        </Grid.Row>
      </Grid>
     
    </div>
  );
}

export default AddTasks;
