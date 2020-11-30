import React ,{useState} from 'react'
import { Icon,Card, List} from 'semantic-ui-react'
import { Button ,Modal,Form} from 'react-bootstrap';


function RenderTasks({title,list,setList}) {
  const[titleValue,setValue]=useState(title)
  const [button,setButton]=useState('Add')
  const [taskTitle,setTitle]=useState('')
  const [taskDesc,setDescription]=useState('')
  const [editIndex,setIndex]=useState('')
  const [taskList,setTaskList]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addTasks=function(){
    if(button==='Add'){
      const temp=[...taskList]
      temp.push({taskTitle:taskTitle,description:taskDesc})
      setTaskList(temp)
      setShow(false)
    }
    else{
      const temp=[...taskList]
      temp.splice(editIndex,1,{taskTitle:taskTitle,description:taskDesc})
      setTaskList(temp)
      setShow(false)
      setButton('Add')
    }
    setTitle('')
    setDescription('')
  }

  const deleteItem=function(item,index){
    const temp=[...taskList]
    temp.splice(index,1)
    setTaskList(temp)
  }

  const editItem=function(item,index){
    setShow(true)
    setIndex(index)
    setButton('Update')
    setTitle(item.taskTitle)
    setDescription(item.description)
  }

  return (
    <div >
            <Card>
              <Card.Content>
                <Card.Description style={{height:'200px'}}>
                <div >
                   
                      <div >    
                                  <input value={titleValue} 
                                  id='input'
                                  style={{ border: 0 ,fontWeight:'bold' }}
                                  onChange={(e)=>setValue(e.target.value)}
                                  />
                      </div>   
                    
                    {
                      taskList && taskList.map((item,index)=>{
                        return<List divided >
                          <List.Item style={{display:'flex',justifyContent:'space-between'}}>
                            <List.Content>
                              <List.Header>{item.taskTitle}</List.Header>
                              <List.Description>{item.description}</List.Description>
                            </List.Content>
                            <div style={{marginLeft:'70%'}}>
                              <a onClick={()=>editItem(item,index)}><Icon name='edit'/></a>
                              <a onClick={()=>deleteItem(item,index)}><Icon name='trash'/></a>
                            </div>
                          </List.Item>
                        </List>
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
                 {button}
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  );
}

export default RenderTasks;
