import React ,{useState} from 'react'
import { Button ,Modal,Form} from 'react-bootstrap';
import { Card,Icon,Grid} from 'semantic-ui-react'
import AddTask from '../RenderTask'


function AddTasks() {

    const [show, setShow] = useState(false);
    const [title,setTitle]=useState('')
    const [list,setList]=useState([])
    const [showCard,setShowCard]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCard=function(){
      const tempList=[...list]
      tempList.push(<AddTask title={title} setTitle={setTitle}/>)
      setList(tempList)
      setShow(false)
      console.log(list)
  }
  const showIndex=function(index){
console.log('in**',index)
  }
  return (
    <div className='head'>

      <Button variant="warning" onClick={handleShow}>
       + Add a new Coloumn
      </Button>

      <Grid >
        {list && 
        list.map((item,index)=>{
          return <Grid.Row>
                    {item}
                </Grid.Row>
        })}
      </Grid>

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
          <Button variant="danger" onClick={addCard}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

     
    </div>
  );
}

export default AddTasks;
