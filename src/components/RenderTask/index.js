import React ,{useState} from 'react'
import { Icon,Card} from 'semantic-ui-react'
import { Button ,Modal,Form} from 'react-bootstrap';


function RenderTasks({title,list,setList}) {
  const[titleValue,setValue]=useState(title)
  const [taskTitle,setTitle]=useState('')
  const [taskDesc,setDescription]=useState('')
  const [taskList,setTaskList]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addTasks=function(){
    const temp=[...taskList]
    temp.push({taskTitle:taskTitle,description:taskDesc})
    setTaskList(temp)
    setShow(false)
  }

  return (
    <div >
            <Card>
              <Card.Content>
                <Card.Description style={{height:'200px'}}>
                <div >
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <div className='fields'>    
                                  <input value={titleValue} 
                                  id='input'
                                  style={{ border: 0 ,fontWeight:'bold' }}
                                  onChange={(e)=>setValue(e.target.value)}
                                  />
                      </div>   
                      <div>
                            <a><Icon name='edit'/></a>
                            <a ><Icon name='trash'/></a>
                      </div>
                    </div>
                    {
                      taskList && taskList.map((item,index)=>{
                        return <li>
                          <span>{item.taskTitle}</span><br/>
                          <span>{item.description}</span>
                        </li>
                      })
                    }
                    <div style={{position:'absolute' , bottom:0}}>
                        <Button
                          variant="success"
                          size="sm"
                          style={{ margin: " 0px 0px 14px 210px" }}
                          onClick={handleShow}>
                          <Icon name="plus" size="small" />
                          Task
                        </Button>
                    </div>
                 </div>    
                  </Card.Description>
              </Card.Content> 
            </Card>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add new Coloumn</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                  <Form.Control type="text" value={taskTitle} 
                                placeholder="Task Title..."
                                 onChange={(e)=>setTitle(e.target.value)} />
                  <Form.Control as="textarea" value={taskDesc} 
                                placeholder="Task Description..."
                                style={{marginTop:'3%'}}
                                rows={3} 
                                onChange={(e)=>setDescription(e.target.value)}/>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" onClick={addTasks} >
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  );
}

export default RenderTasks;
