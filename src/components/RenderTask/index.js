import React ,{useState} from 'react'
import { Button,Icon,Card} from 'semantic-ui-react'


function RenderTasks({title,setTitle}) {
  const[titleValue,setValue]=useState(title)

  return (
    <div >
            <Card>
              <Card.Content>
                <Card.Description style={{height:'200px'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div className='fields'>    
                                <input value={titleValue} 
                                id='input'
                                style={{ border: 0 ,fontWeight:'bold' }}
                                onChange={(e)=>setValue(e.target.value)}
                                />
                    </div>   
                    <div>
                        <a ><Icon name='edit'/></a>
                        <a><Icon name='trash'/></a>
                    </div>

                    <div style={{position:'absolute' , bottom:0}}>
                        <Button
                          variant="success"
                          size="sm"
                          style={{ margin: " 0px 0px 14px 210px" }}>
                          <Icon name="plus" size="small" />
                          Task
                        </Button>
                    </div>
                 </div>    
                  </Card.Description>
              </Card.Content> 
            </Card>
    </div>
  );
}

export default RenderTasks;
